import {
  Component,
  EventEmitter,
  Host,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  forwardRef,
} from '@angular/core';
import { LoadFunction } from 'ol/Image';
import { Extent } from 'ol/extent';
import { ProjectionLike } from 'ol/proj';
import { ImageStatic } from 'ol/source';
import { ImageSourceEvent } from 'ol/source/Image';
import { AttributionLike } from 'ol/source/Source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-imagestatic',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }],
})
export class SourceImageStaticComponent extends SourceComponent implements OnInit, OnChanges {
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

  @Output()
  imageLoadStart = new EventEmitter<ImageSourceEvent>();
  @Output()
  imageLoadEnd = new EventEmitter<ImageSourceEvent>();
  @Output()
  imageLoadError = new EventEmitter<ImageSourceEvent>();

  instance: ImageStatic;

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  setLayerSource(): void {
    this.instance = new ImageStatic(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: ImageSourceEvent) => this.imageLoadStart.emit(event));
    this.instance.on('imageloadend', (event: ImageSourceEvent) => this.imageLoadEnd.emit(event));
    this.instance.on('imageloaderror', (event: ImageSourceEvent) => this.imageLoadError.emit(event));
  }

  ngOnInit(): void {
    this.setLayerSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
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
