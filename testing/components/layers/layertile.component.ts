import {Component, Input} from '@angular/core';
import {source} from 'openlayers';
import {MapComponent} from '../map.component';
import {LayerComponent} from './layer.component';

@Component({
  selector: 'aol-layer-tile',
  template: `<ng-content></ng-content>`
})
export class LayerTileComponent extends LayerComponent{
  public source: source.Tile;

  @Input() preload: number;
  @Input() useInterimTilesOnError: boolean;

  constructor(map: MapComponent) {
    super(map);
  }
}
