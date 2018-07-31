import { Component, Host, Input, OnInit, forwardRef, Output, EventEmitter } from '@angular/core';
import { ImageStatic } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
import { ProjectionLike } from 'ol/proj';
import { Extent } from 'ol/extent';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { Size } from 'ol/size';
import { ImageSourceEvent } from 'ol/source/Image';

@Component({
  selector: 'aol-source-imagestatic',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }],
})
export class SourceImageStaticComponent extends SourceComponent implements OnInit {
  instance: ImageStatic;

  @Input()
  projection: ProjectionLike | string;
  @Input()
  imageExtent: Extent;
  @Input()
  url: string;
  @Input()
  attributions: AttributionLike;
  @Input()
  crossOrigin?: string;
  @Input()
  imageLoadFunction?: LoadFunction;
  @Input()
  imageSize?: Size;

  @Output()
  onImageLoadStart = new EventEmitter<ImageSourceEvent>();
  @Output()
  onImageLoadEnd = new EventEmitter<ImageSourceEvent>();
  @Output()
  onImageLoadError = new EventEmitter<ImageSourceEvent>();

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new ImageStatic(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: ImageSourceEvent) => this.onImageLoadStart.emit(event));
    this.instance.on('imageloadend', (event: ImageSourceEvent) => this.onImageLoadEnd.emit(event));
    this.instance.on('imageloaderror', (event: ImageSourceEvent) => this.onImageLoadError.emit(event));
  }
}
