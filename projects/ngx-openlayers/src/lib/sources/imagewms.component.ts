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
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { ImageSourceEvent } from 'ol/source/Image';

@Component({
  selector: 'aol-source-imagewms',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }],
})
export class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
  instance: ImageWMS;

  @Input()
  attributions: AttributionLike;
  @Input()
  crossOrigin: string;
  @Input()
  hidpi: boolean;
  @Input()
  serverType: string;
  @Input()
  imageLoadFunction?: LoadFunction;
  @Input()
  params: Object;
  @Input()
  projection: ProjectionLike | string;
  @Input()
  ratio: number;
  @Input()
  resolutions: Array<number>;
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
