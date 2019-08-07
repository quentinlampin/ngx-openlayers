import {
  Component,
  EventEmitter,
  forwardRef,
  Host,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ImageArcGISRest } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { ImageSourceEvent } from 'ol/source/Image';

@Component({
  selector: 'aol-source-imagearcgisrest',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent) }],
})
export class SourceImageArcGISRestComponent extends SourceComponent implements OnInit, OnChanges {
  instance: ImageArcGISRest;

  @Input() projection: ProjectionLike | string;
  @Input() url: string;
  @Input() attributions: AttributionLike[];
  @Input() crossOrigin?: string;
  @Input() imageLoadFunction?: LoadFunction;
  @Input() params?: { [k: string]: any };
  @Input() ratio = 1.5;
  @Input() resolutions?: number[];
  @Input() wrapX?: boolean;

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
    this.instance = new ImageArcGISRest(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: ImageSourceEvent) => this.onImageLoadStart.emit(event));
    this.instance.on('imageloadend', (event: ImageSourceEvent) => this.onImageLoadEnd.emit(event));
    this.instance.on('imageloaderror', (event: ImageSourceEvent) => this.onImageLoadError.emit(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
}
