import {Component, Host, OnDestroy, OnInit} from '@angular/core';
import { layer, source } from 'openlayers';
import { MapComponent } from "./map.component";


export abstract class LayerComponent implements OnInit, OnDestroy {
  public host: MapComponent;
  public instance: any;
  public source: source.Tile|source.Vector;
  public renderOrder: any;

  constructor(map: MapComponent){
    this.host = map;
  }

  ngOnInit(){
    console.log('add aol-layer');
    this.host.instance.addLayer(this.instance);
  }

  ngOnDestroy(){
    console.log('removing aol-layer');
    this.host.instance.removeLayer(this.instance);
  }
}

@Component({
  selector: 'aol-layer-tile',
  template: `<ng-content></ng-content>`
})
export class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy {
  public source: source.Tile;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-layer-tile');
    super(map);
    this.instance = new layer.Tile(this);
  }

  ngOnInit(){
    super.ngOnInit();
  }

  ngOnDestroy(){
    super.ngOnDestroy();
  }
}

@Component({
  selector: 'aol-layer-vector',
  template: `<ng-content></ng-content>`
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy {
  public source: source.Vector;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-layer-vector');
    super(map);
    this.instance = new layer.Vector(this);
  }

  ngOnInit(){
    super.ngOnInit();
  }

  ngOnDestroy(){
    super.ngOnDestroy();
  }
}
