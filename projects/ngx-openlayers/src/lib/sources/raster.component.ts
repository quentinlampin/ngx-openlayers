import { AfterContentInit, Component, ContentChild, forwardRef, inject, input, output } from '@angular/core';

import { Raster, Source } from 'ol/source';
import { Options, RasterSourceEvent } from 'ol/source/Raster';

import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-raster',
  template: `<ng-content></ng-content>`,
  standalone: true,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceRasterComponent),
    },
  ],
})
export class SourceRasterComponent extends SourceComponent implements AfterContentInit {
  operation = input<Options['operation']>();
  threads = input<Options['threads']>();
  lib = input<Options['lib']>();
  operationType = input<Options['operationType']>();

  beforeOperations = output<RasterSourceEvent>();
  afterOperations = output<RasterSourceEvent>();

  instance?: Raster;

  sources: Source[] = [];

  protected override host = inject(LayerImageComponent);

  @ContentChild(SourceComponent)
  set source(sourceComponent: SourceComponent | undefined) {
    if (!sourceComponent?.instance) {
      return;
    }

    this.sources = [sourceComponent.instance];

    if (this.instance) {
      this.init();
    }
  }

  ngAfterContentInit(): void {
    this.init();
  }

  private init(): void {
    this.instance = new Raster({
      operation: this.operation(),
      threads: this.threads(),
      lib: this.lib(),
      operationType: this.operationType(),
      sources: this.sources,
    });

    this.instance.on('beforeoperations', (event: RasterSourceEvent) => {
      this.beforeOperations.emit(event);
    });

    this.instance.on('afteroperations', (event: RasterSourceEvent) => {
      this.afterOperations.emit(event);
    });

    this._register(this.instance);
  }
}
