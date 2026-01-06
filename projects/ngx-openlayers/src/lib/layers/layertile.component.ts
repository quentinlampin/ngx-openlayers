import { Component, Input, OnInit } from '@angular/core';
import { Tile } from 'ol/layer';
import TileSource from 'ol/source/Tile';
import { LayerComponent } from './layer.component';
import { BackgroundColor } from 'ol/layer/Base';

@Component({
  selector: 'aol-layer-tile',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerTileComponent extends LayerComponent implements OnInit {
  @Input()
  preload: number;
  @Input()
  background: BackgroundColor;
  @Input()
  useInterimTilesOnError: boolean;
  @Input()
  cacheSize: number;

  source: TileSource;

  ngOnInit(): void {
    this.instance = new Tile(this);
    super.ngOnInit();
  }
}
