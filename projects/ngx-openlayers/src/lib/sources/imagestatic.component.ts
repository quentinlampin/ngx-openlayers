import { Component, OnChanges, OnInit, SimpleChanges, forwardRef, inject, input, output } from '@angular/core';
import { Extent } from 'ol/extent';
import { LoadFunction } from 'ol/Image';
import BaseObject from 'ol/Object';
import { ProjectionLike } from 'ol/proj';
import { ImageStatic } from 'ol/source';
import { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';

import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-imagestatic',
  template: `<ng-content></ng-content>`,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceImageStaticComponent),
    },
  ],
  standalone: true,
})
export class SourceImageStaticComponent extends SourceComponent implements OnInit, OnChanges {
  projection = input.required<ProjectionLike | string>();
  imageExtent = input.required<Extent>();
  url = input.required<string>();
  attributions = input<AttributionLike>();

  crossOrigin = input<string>();
  imageLoadFunction = input<LoadFunction>();

  imageLoadStart = output<ImageSourceEvent>();
  imageLoadEnd = output<ImageSourceEvent>();
  imageLoadError = output<ImageSourceEvent>();

  override instance?: ImageStatic;

  readonly host = inject(LayerImageComponent);

  private setLayerSource(): void {
    this.instance = new ImageStatic({
      projection: this.projection(),
      imageExtent: this.imageExtent(),
      url: this.url(),
      attributions: this.attributions(),
      crossOrigin: this.crossOrigin(),
      imageLoadFunction: this.imageLoadFunction(),
    });

    this.host.instance?.setSource(this.instance);

    this.instance.on('imageloadstart', (event) => this.imageLoadStart.emit(event));

    this.instance.on('imageloadend', (event) => this.imageLoadEnd.emit(event));

    this.instance.on('imageloaderror', (event) => this.imageLoadError.emit(event));
  }

  ngOnInit(): void {
    this.setLayerSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }

    if (changes['url']) {
      this.setLayerSource();
      return;
    }

    const properties: Parameters<BaseObject['setProperties']>[0] = {};

    for (const key in changes) {
      properties[key] = changes[key].currentValue;
    }

    this.instance.setProperties(properties, false);
  }
}
