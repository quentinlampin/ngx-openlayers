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
import { AttributionLike, ImageLoadFunctionType, ProjectionLike, source } from 'openlayers';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-imagewms',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }],
})
export class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
  instance: source.ImageWMS;

  @Input()
  attributions: AttributionLike;
  @Input()
  crossOrigin: string;
  @Input()
  hidpi: boolean;
  @Input()
  serverType: string;
  @Input()
  imageLoadFunction?: ImageLoadFunctionType;
  @Input()
  logo: string | olx.LogoOptions;
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
  onImageLoadStart = new EventEmitter<source.ImageEvent>();
  @Output()
  onImageLoadEnd = new EventEmitter<source.ImageEvent>();
  @Output()
  onImageLoadError = new EventEmitter<source.ImageEvent>();

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.ImageWMS(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: source.ImageEvent) => this.onImageLoadStart.emit(event));
    this.instance.on('imageloadend', (event: source.ImageEvent) => this.onImageLoadEnd.emit(event));
    this.instance.on('imageloaderror', (event: source.ImageEvent) => this.onImageLoadError.emit(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
}
