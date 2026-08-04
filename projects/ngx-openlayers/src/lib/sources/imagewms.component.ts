import { Component, input, OnChanges, OnInit, output, SimpleChanges, forwardRef, inject } from '@angular/core';
import { LoadFunction } from 'ol/Image';
import { ProjectionLike } from 'ol/proj';
import { ImageWMS } from 'ol/source';
import { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';
import { ServerType } from 'ol/source/wms';

import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-imagewms',
  template: ` <ng-content></ng-content> `,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceImageWMSComponent),
    },
  ],
  standalone: true,
})
export class SourceImageWMSComponent extends SourceComponent implements OnInit, OnChanges {
  attributions = input<AttributionLike>();
  crossOrigin = input<string>();
  hidpi = input<boolean>();
  serverType = input<ServerType>();
  imageLoadFunction = input<LoadFunction>();
  params = input<Record<string, unknown>>();
  projection = input<ProjectionLike | string>();
  ratio = input<number>();
  resolutions = input<number[]>();
  url = input<string>();

  imageLoadStart = output<ImageSourceEvent>();
  imageLoadEnd = output<ImageSourceEvent>();
  imageLoadError = output<ImageSourceEvent>();

  override instance?: ImageWMS;

  private readonly layer = inject(LayerImageComponent);

  ngOnInit(): void {
    this.instance = new ImageWMS({
      attributions: this.attributions(),
      crossOrigin: this.crossOrigin(),
      hidpi: this.hidpi(),
      serverType: this.serverType(),
      imageLoadFunction: this.imageLoadFunction(),
      params: this.params(),
      projection: this.projection(),
      ratio: this.ratio(),
      resolutions: this.resolutions(),
      url: this.url(),
    });

    this.layer.instance?.setSource(this.instance);

    this.instance.on('imageloadstart', (e) => this.imageLoadStart.emit(e));
    this.instance.on('imageloadend', (e) => this.imageLoadEnd.emit(e));
    this.instance.on('imageloaderror', (e) => this.imageLoadError.emit(e));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance && changes['params']) {
      this.instance.updateParams(this.params() ?? {});
    }
  }
}
