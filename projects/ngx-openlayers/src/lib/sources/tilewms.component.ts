import { Component, effect, forwardRef, inject, input } from '@angular/core';

import { LoadFunction } from 'ol/Tile';
import { TileWMS } from 'ol/source';
import TileGrid from 'ol/tilegrid/TileGrid';
import { ProjectionLike } from 'ol/proj';
import { ServerType } from 'ol/source/wms';

import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-tilewms',
  standalone: true,
  template: `<ng-content></ng-content>`,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceTileWMSComponent),
    },
  ],
})
export class SourceTileWMSComponent extends SourceComponent {
  readonly cacheSize = input<number>();
  readonly crossOrigin = input<string>();
  readonly gutter = input<number>();
  readonly hidpi = input<boolean>();
  readonly params = input<{ [x: string]: unknown }>({});
  readonly projection = input<ProjectionLike>();
  readonly reprojectionErrorThreshold = input<number>();
  readonly serverType = input<ServerType>();
  readonly tileGrid = input<TileGrid>();
  readonly tileLoadFunction = input<LoadFunction>();
  readonly url = input<string>();
  readonly urls = input<string[]>();
  readonly wrapX = input<boolean>();

  instance?: TileWMS;

  readonly host = inject(LayerTileComponent);

  constructor() {
    super();

    this.instance = new TileWMS({
      cacheSize: this.cacheSize(),
      crossOrigin: this.crossOrigin(),
      gutter: this.gutter(),
      hidpi: this.hidpi(),
      params: this.params(),
      projection: this.projection(),
      reprojectionErrorThreshold: this.reprojectionErrorThreshold(),
      serverType: this.serverType(),
      tileGrid: this.tileGrid(),
      tileLoadFunction: this.tileLoadFunction(),
      url: this.url(),
      urls: this.urls(),
      wrapX: this.wrapX(),
    });

    this.host.instance?.setSource(this.instance);

    effect(() => {
      const params = this.params();

      if (this.instance && params) {
        this.instance.updateParams(params);
      }
    });
  }
}
