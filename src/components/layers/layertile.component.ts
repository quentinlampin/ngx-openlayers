import { Component, Host, OnDestroy, OnInit, Input } from '@angular/core';
import { layer, source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-tile',
  template: `<ng-content></ng-content>`
})
export class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy {
  public source: source.Tile;

  @Input() preload: number;
  @Input() useInterimTilesOnError: boolean;

  constructor(@Host() map: MapComponent) {
    super(map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Tile instance with:', this);
    this.instance = new layer.Tile(this);
    super.ngOnInit();
  }
}
