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
import { ImageWMS } from 'ol/source';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { ImageSourceEvent } from 'ol/source/Image';
import { ServerType } from 'ol/source/wms';

@Component({
    selector: 'aol-source-imagewms',
    template: ` <ng-content></ng-content> `,
    providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }],
    standalone: true,
})
export class SourceImageWMSComponent extends SourceComponent implements OnChanges, OnInit {
  @Input() attributions: AttributionLike;
  @Input() crossOrigin: string;
  @Input() hidpi: boolean;
  @Input() serverType: ServerType;
  @Input() imageLoadFunction?: LoadFunction;
  @Input() params: Record<string, unknown>;
  @Input() projection: ProjectionLike | string;
  @Input() ratio: number;
  @Input() resolutions: Array<number>;
  @Input() url: string;

  @Output() imageLoadStart = new EventEmitter<ImageSourceEvent>();
  @Output() imageLoadEnd = new EventEmitter<ImageSourceEvent>();
  @Output() imageLoadError = new EventEmitter<ImageSourceEvent>();

  instance: ImageWMS;

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new ImageWMS(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: ImageSourceEvent) => this.imageLoadStart.emit(event));
    this.instance.on('imageloadend', (event: ImageSourceEvent) => this.imageLoadEnd.emit(event));
    this.instance.on('imageloaderror', (event: ImageSourceEvent) => this.imageLoadError.emit(event));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
}
