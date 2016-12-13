import { Component, Host, OnDestroy, Input } from '@angular/core';
import { source } from 'openlayers';
import {LayerTileComponent, LayerVectorComponent} from "./layer.components";

@Component({
  selector: 'aol-source-osm',
  template: `<div class="aol-source-osm"></div>`
})
export class SourceOsmComponent extends source.OSM implements OnDestroy{
  _host_: LayerTileComponent;

  constructor(@Host() layer: LayerTileComponent){
    console.log('instancing aol-source-osm');
    super();
    this._host_ = layer;
    this._host_.setSource(this);
    this._host_.changed();
  }

  ngOnDestroy(){
    console.log('removing aol-source-osm');
    this._host_.setSource(null);
  }
}

@Component({
  selector: 'aol-source-bingmaps',
  template: `<div class="aol-source-bingmaps"></div>`
})
export class SourceBingmapsComponent extends source.BingMaps implements OnDestroy{
  _host_: LayerTileComponent;

  @Input('key') key: string;

  constructor(@Host() layer: LayerTileComponent, key: string){
    console.log('instancing aol-source-osm');
    super({
      key: key,
      imagerySet: 'Road'
    });
    this._host_ = layer;
    this._host_.setSource(this);
  }

  ngOnDestroy(){
    this._host_.setSource(null);
  }
}

@Component({
  selector: 'aol-source-vector',
  template: `<ng-content></ng-content>`
})
export class SourceVectorComponent extends source.Vector implements OnDestroy{
  _host_: LayerVectorComponent;

  constructor(@Host() layer: LayerVectorComponent){
    console.log('instancing aol-source-vector');
    super();
    this._host_ = layer;
    this._host_.setSource(this);
  }

  ngOnDestroy(){
    this._host_.setSource(null);
  }
}
