import { Component, input, OnInit } from '@angular/core';
import { Tile } from 'ol/layer';
import TileSource from 'ol/source/Tile';
import { BackgroundColor } from 'ol/layer/Base';

import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-tile',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerTileComponent extends LayerComponent implements OnInit {
  preload = input<number>();
  background = input<BackgroundColor>();
  useInterimTilesOnError = input<boolean>();
  cacheSize = input<number>();

  source!: TileSource;

  ngOnInit(): void {
    this.instance = new Tile({
      opacity: this.opacity(),
      visible: this.visible(),
      extent: this.extent(),
      zIndex: this.zIndex(),
      minResolution: this.minResolution(),
      maxResolution: this.maxResolution(),
      minZoom: this.minZoom(),
      maxZoom: this.maxZoom(),
      preload: this.preload(),
      background: this.background(),
      useInterimTilesOnError: this.useInterimTilesOnError(),
      source: this.source,
      properties: this.properties(),
    });

    super.ngOnInit();
  }
}
