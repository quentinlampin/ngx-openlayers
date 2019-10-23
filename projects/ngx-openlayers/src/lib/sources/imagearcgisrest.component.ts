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
  imageLoadStart = new EventEmitter<ImageSourceEvent>();
  @Output()
  imageLoadEnd = new EventEmitter<ImageSourceEvent>();
  @Output()
  imageLoadError = new EventEmitter<ImageSourceEvent>();

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new ImageArcGISRest(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: ImageSourceEvent) => this.imageLoadStart.emit(event));
    this.instance.on('imageloadend', (event: ImageSourceEvent) => this.imageLoadEnd.emit(event));
    this.instance.on('imageloaderror', (event: ImageSourceEvent) => this.imageLoadError.emit(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
}
