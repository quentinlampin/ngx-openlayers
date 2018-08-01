import { AfterContentInit, Component, EventEmitter, forwardRef, Host, Input, Output } from '@angular/core';
import { RasterOperation, RasterOperationType, source } from 'openlayers';

import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-raster',
  template: `<ng-content></ng-content>`,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceRasterComponent),
    },
  ],
})
export class SourceRasterComponent extends SourceComponent implements AfterContentInit {
  instance: source.Raster;

  @Input()
  operation?: RasterOperation;
  @Input()
  threads?: number;
  @Input()
  lib?: Object;
  @Input()
  operationType?: RasterOperationType;

  @Output()
  beforeOperations: EventEmitter<source.RasterEvent> = new EventEmitter<source.RasterEvent>();
  @Output()
  afterOperations: EventEmitter<source.RasterEvent> = new EventEmitter<source.RasterEvent>();

  sources: source.Source[] = [];

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngAfterContentInit() {
    this.instance = new source.Raster(this);

    this.instance.on('beforeoperations', (event: source.RasterEvent) => this.beforeOperations.emit(event));
    this.instance.on('afteroperations', (event: source.RasterEvent) => this.afterOperations.emit(event));

    this._register(this.instance);
  }
}
