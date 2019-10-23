import { AfterContentInit, Component, EventEmitter, forwardRef, Host, Input, Output } from '@angular/core';
import { Raster, Source } from 'ol/source';
import { RasterOperationType, RasterSourceEvent } from 'ol/source/Raster';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import { Operation } from 'ol/source/Raster';

@Component({
  selector: 'aol-source-raster',
  template: `
    <ng-content></ng-content>
  `,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceRasterComponent),
    },
  ],
})
export class SourceRasterComponent extends SourceComponent implements AfterContentInit {
  instance: Raster;

  @Input()
  operation?: Operation;
  @Input()
  threads?: number;
  @Input()
  lib?: any;
  @Input()
  operationType?: RasterOperationType;

  @Output()
  beforeOperations: EventEmitter<RasterSourceEvent> = new EventEmitter<RasterSourceEvent>();
  @Output()
  afterOperations: EventEmitter<RasterSourceEvent> = new EventEmitter<RasterSourceEvent>();

  sources: Source[] = [];

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngAfterContentInit() {
    this.init();
  }

  init() {
    this.instance = new Raster(this);
    this.instance.on('beforeoperations', (event: RasterSourceEvent) => this.beforeOperations.emit(event));
    this.instance.on('afteroperations', (event: RasterSourceEvent) => this.afterOperations.emit(event));
    this._register(this.instance);
  }
}
