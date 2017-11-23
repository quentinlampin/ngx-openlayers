import {
  Component, OnDestroy, OnInit, Inject, Input, Optional, OnChanges,
  SimpleChanges
} from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-layer-tile',
  template: `<ng-content></ng-content>`
})
export class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
  public source: ol.source.Tile;

  @Input() preload: number;
  @Input() useInterimTilesOnError: boolean;

  constructor(@Inject(MapSystemToken) protected mapSystem: any,
              map: MapComponent,
              @Optional() group?: LayerGroupComponent) {
    super(mapSystem, group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Tile instance with:', this);
    this.instance = new this.mapSystem.layer.Tile(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
