import {
  Component,
  Host,
  Input,
  OnChanges,
  OnInit,
  forwardRef,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import ImageWMS, { Options as ImageWMSOptions } from 'ol/source/ImageWMS';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { ImageSourceEvent } from 'ol/source/Image';
import WMSServerType from 'ol/source/WMSServerType';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-imagewms',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }],
})
export class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit, ImageWMSOptions {
  instance: ImageWMS;

  @Input()
  attributions: AttributionLike;
  @Input()
  crossOrigin: string;
  @Input()
  hidpi: boolean;
  @Input()
  serverType: WMSServerType | string;
  @Input()
  imageLoadFunction?: LoadFunction;
  @Input()
  params: { [key: string]: any };
  @Input()
  projection: ProjectionLike;
  @Input()
  ratio: number;
  @Input()
  resolutions: number[];
  @Input()
  url: string;

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
    this.instance = new ImageWMS(this);
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
