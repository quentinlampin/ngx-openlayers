import { Component, OnChanges, OnInit, SimpleChanges, forwardRef, inject, input, output } from '@angular/core';
import { LoadFunction } from 'ol/Image';
import { ProjectionLike } from 'ol/proj';
import { ImageArcGISRest } from 'ol/source';
import { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';

import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-imagearcgisrest',
  template: `<ng-content></ng-content>`,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceImageArcGISRestComponent),
    },
  ],
  standalone: true,
})
export class SourceImageArcGISRestComponent extends SourceComponent implements OnInit, OnChanges {
  projection = input<ProjectionLike | string>();
  url = input.required<string>();
  attributions = input<AttributionLike>();

  crossOrigin = input<string>();
  imageLoadFunction = input<LoadFunction>();
  params = input<Record<string, unknown>>();
  ratio = input(1.5);
  resolutions = input<number[]>();

  imageLoadStart = output<ImageSourceEvent>();
  imageLoadEnd = output<ImageSourceEvent>();
  imageLoadError = output<ImageSourceEvent>();

  override instance?: ImageArcGISRest;

  readonly host = inject(LayerImageComponent);

  ngOnInit(): void {
    this.instance = new ImageArcGISRest({
      projection: this.projection(),
      url: this.url(),
      attributions: this.attributions(),
      crossOrigin: this.crossOrigin(),
      imageLoadFunction: this.imageLoadFunction(),
      params: this.params(),
      ratio: this.ratio(),
      resolutions: this.resolutions(),
    });

    this.host.instance?.setSource(this.instance);

    this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));

    this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));

    this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance && changes['params']) {
      this.instance.updateParams(this.params() ?? {});
    }
  }
}
