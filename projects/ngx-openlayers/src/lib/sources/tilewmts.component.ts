import { Component, contentChild, effect, forwardRef, inject, input, output } from '@angular/core';

import { WMTS } from 'ol/source';
import { TileSourceEvent } from 'ol/source/Tile';
import BaseObject from 'ol/Object';

import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { SourceComponent } from './source.component';
import { Options } from 'ol/source/WMTS';

@Component({
  selector: 'aol-source-tilewmts',
  standalone: true,
  template: `<ng-content />`,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceTileWMTSComponent),
    },
  ],
})
export class SourceTileWMTSComponent extends SourceComponent {
  readonly cacheSize = input<Options['cacheSize']>();
  readonly crossOrigin = input<Options['crossOrigin']>();
  readonly tileGrid = input<Options['tileGrid']>();
  readonly projection = input<Options['projection']>();
  readonly reprojectionErrorThreshold = input<Options['reprojectionErrorThreshold']>();

  readonly requestEncoding = input<Options['requestEncoding']>();
  readonly layer = input.required<Options['layer']>();
  readonly style = input.required<Options['style']>();

  readonly tileClass = input<Options['tileClass']>();
  readonly tilePixelRatio = input<Options['tilePixelRatio']>();

  readonly version = input<Options['version']>();
  readonly format = input<Options['format']>();

  readonly matrixSet = input.required<Options['matrixSet']>();
  readonly dimensions = input<Options['dimensions']>();

  readonly url = input<Options['url']>();
  readonly tileLoadFunction = input<Options['tileLoadFunction']>();
  readonly urls = input<Options['urls']>();
  readonly wrapX = input<Options['wrapX']>();

  readonly tileGridWMTS = contentChild(TileGridWMTSComponent);

  readonly tileLoadStart = output<TileSourceEvent>();
  readonly tileLoadEnd = output<TileSourceEvent>();
  readonly tileLoadError = output<TileSourceEvent>();

  instance?: WMTS;

  readonly host = inject(LayerTileComponent);

  constructor() {
    super();

    effect(() => {
      const grid = this.tileGrid() ?? this.tileGridWMTS()?.instance;

      if (!grid) {
        return;
      }

      this.createSource(grid);
    });

    effect(() => {
      if (!this.instance) {
        return;
      }

      const properties: Parameters<BaseObject['setProperties']>[0] = {
        cacheSize: this.cacheSize(),
        crossOrigin: this.crossOrigin(),
        projection: this.projection(),
        reprojectionErrorThreshold: this.reprojectionErrorThreshold(),
        requestEncoding: this.requestEncoding(),
        layer: this.layer(),
        style: this.style(),
        tileClass: this.tileClass(),
        tilePixelRatio: this.tilePixelRatio(),
        version: this.version(),
        format: this.format(),
        matrixSet: this.matrixSet(),
        dimensions: this.dimensions(),
        urls: this.urls(),
        wrapX: this.wrapX(),
      };

      this.instance.setProperties(properties, false);
    });
  }

  private createSource(tileGrid: Options['tileGrid']) {
    this.instance = new WMTS({
      cacheSize: this.cacheSize(),
      crossOrigin: this.crossOrigin(),
      tileGrid,
      projection: this.projection(),
      reprojectionErrorThreshold: this.reprojectionErrorThreshold(),

      requestEncoding: this.requestEncoding(),
      layer: this.layer(),
      style: this.style(),

      tileClass: this.tileClass(),
      tilePixelRatio: this.tilePixelRatio(),

      version: this.version(),
      format: this.format(),

      matrixSet: this.matrixSet(),
      dimensions: this.dimensions(),

      url: this.url(),
      tileLoadFunction: this.tileLoadFunction(),
      urls: this.urls(),
      wrapX: this.wrapX(),
    });

    this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));

    this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));

    this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));

    this.host.instance?.setSource(this.instance);

    this._register(this.instance);
  }
}
