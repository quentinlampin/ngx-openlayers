import { Component, Input, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Tile } from 'ol/layer';
import TileSource from 'ol/source/Tile';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'aol-layer-tile',
  template: ` <ng-content></ng-content> `,
})
export class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  preload: number;
  @Input()
  useInterimTilesOnError: boolean;

  source: TileSource;

  constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit(): void {
    // console.log('creating ol.layer.Tile instance with:', this);
    this.instance = new Tile(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }
}
