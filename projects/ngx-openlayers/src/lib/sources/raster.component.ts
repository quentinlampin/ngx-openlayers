import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Host,
  Input,
  Output,
} from '@angular/core';
import { Raster, Source } from 'ol/source';
import { Operation, RasterSourceEvent } from 'ol/source/Raster';

import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-raster',
  template: ` <ng-content></ng-content> `,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceRasterComponent),
    },
  ],
})
export class SourceRasterComponent extends SourceComponent implements AfterContentInit {
  @Input()
  operation?: Operation;
  @Input()
  threads?: number;
  @Input()
  lib?: any;
  @Input()
  operationType?: 'pixel' | 'image';

  @Output()
  beforeOperations: EventEmitter<RasterSourceEvent> = new EventEmitter<RasterSourceEvent>();
  @Output()
  afterOperations: EventEmitter<RasterSourceEvent> = new EventEmitter<RasterSourceEvent>();

  instance: Raster;
  sources: Source[] = [];

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  @ContentChild(SourceComponent)
  set source(sourceComponent: SourceComponent) {
    this.sources = [sourceComponent.instance];
    if (this.instance) {
      // Openlayer doesn't handle sources update. Just recreate Raster instance.
      this.init();
    }
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
