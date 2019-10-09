import {
  Component,
  Host,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import ImageStatic, { Options as ImageStaticOptions } from 'ol/source/ImageStatic';
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
export class SourceImageStaticComponent extends SourceComponent implements OnInit, OnChanges, ImageStaticOptions {
  instance: ImageStatic;

  @Input()
  projection: ProjectionLike;
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

  setLayerSource(): void {
    this.instance = new ImageStatic(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: ImageSourceEvent) => this.onImageLoadStart.emit(event));
    this.instance.on('imageloadend', (event: ImageSourceEvent) => this.onImageLoadEnd.emit(event));
    this.instance.on('imageloaderror', (event: ImageSourceEvent) => this.onImageLoadError.emit(event));
  }

  ngOnInit() {
    this.setLayerSource();
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'url':
            this.url = changes[key].currentValue;
            this.setLayerSource();
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    this.instance.setProperties(properties, false);
  }
}
