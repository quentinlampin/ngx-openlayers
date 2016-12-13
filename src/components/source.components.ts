import {Component, Host, OnDestroy, Input, OnInit} from '@angular/core';
import { source } from 'openlayers';
import {LayerTileComponent, LayerVectorComponent, LayerComponent} from "./layer.components";
import BingMapsOptions = olx.source.BingMapsOptions;
import OSMOptions = olx.source.OSMOptions;
import VectorOptions = olx.source.VectorOptions;

export class SourceComponent implements OnInit, OnDestroy {
  public host: LayerComponent;
  public instance: any;

  constructor(layer: LayerComponent){
    this.host = layer;
  }

  ngOnInit(){}

  ngOnDestroy(){
    console.log('removing aol-layer');
    this.host.instance.setSource(null);
  }
}

@Component({
  selector: 'aol-source-osm',
  template: `<div class="aol-source-osm"></div>`
})
export class SourceOsmComponent extends SourceComponent implements OSMOptions{

  constructor(@Host() layer: LayerTileComponent){
    console.log('instancing aol-source-osm');
    super(layer);
  }

  ngOnInit(){
    this.instance = new source.OSM(this);
    this.host.instance.setSource(this.instance);
  }
}

@Component({
  selector: 'aol-source-bingmaps',
  template: `<div class="aol-source-bingmaps"></div>`
})

export class SourceBingmapsComponent extends SourceComponent implements BingMapsOptions{
  @Input('key') key: string;
  @Input('imagerySet') imagerySet: 'Road'|'Aerial'|'AerialWithLabels'|'collinsBart'|'ordnanceSurvey';

  constructor(@Host() layer: LayerTileComponent){
    console.log('instancing aol-source-bingmaps');
    super(layer);
  }

  ngOnInit(){
    this.imagerySet = this.imagerySet ? this.imagerySet : 'Aerial';
    this.instance = new source.BingMaps(this);
    this.host.instance.setSource(this.instance);
  }
}

@Component({
  selector: 'aol-source-vector',
  template: `<ng-content></ng-content>`
})
export class SourceVectorComponent extends SourceComponent implements VectorOptions{

  constructor(@Host() layer: LayerVectorComponent){
    console.log('instancing aol-source-vector');
    super(layer);
    this.instance = new source.Vector(this);
  }

  ngOnInit(){
    this.host.instance.setSource(this.instance);
  }
}
