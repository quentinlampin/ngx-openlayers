import { Component, Host, OnDestroy } from '@angular/core';
import { layer } from 'openlayers';
import { MapComponent } from "./map.component";


@Component({
  selector: 'aol-layer-tile',
  template: `<ng-content></ng-content>`
})
export class LayerTileComponent extends layer.Tile implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-layer-tile');
    super();
    this._host_ = map;
    map.addLayer(this);
  }

  ngOnDestroy(){
    console.log('removing aol-layer-tile');
    this._host_.removeLayer(this);
  }
}

@Component({
  selector: 'aol-layer-vector',
  template: `<ng-content></ng-content>`
})
export class LayerVectorComponent extends layer.Vector implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-layer-vector');
    super();
    this._host_ = map;
    map.addLayer(this);
  }

  ngOnDestroy(){
    console.log('removing aol-layer-vector');
    this._host_.removeLayer(this);
  }
}
