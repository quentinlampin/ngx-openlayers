import {Component, Host, OnDestroy, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import { layer, source, Extent } from 'openlayers';
import { MapComponent } from "./map.component";


export abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
  public host: MapComponent;
  public instance: any;
  public componentType: string = 'layer';

  @Input('opacity') opacity: number|undefined = undefined;
  @Input('visible') visible: boolean|undefined = undefined;
  @Input('extent') extent:	Extent|undefined = undefined;
  @Input('zIndex') zIndex:	number|undefined = undefined;
  @Input('minResolution') minResolution: number|undefined = undefined;
  @Input('maxResolution') maxResolution: number|undefined = undefined;

  constructor(map: MapComponent){
    this.host = map;
  }

  ngOnInit(){
    this.host.instance.addLayer(this.instance);
  }

  ngOnDestroy(){
    this.host.instance.removeLayer(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: { [index: string] : any } = {};
    if(!this.instance) {
      return;
    }
    for (let key in changes) {
      properties[key] = changes[key].currentValue;
    }
    console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}

@Component({
  selector: 'aol-layer-tile',
  template: `<ng-content></ng-content>`
})
export class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy {
  public source: source.Tile;

  @Input('preload') preload: number|undefined = undefined;
  @Input('useInterimTilesOnError') useInterimTilesOnError: boolean|undefined = undefined;

  constructor(@Host() map: MapComponent){
    super(map);
  }

  ngOnInit(){
    console.log('creating ol.layer.Tile instance with:', this);
    this.instance = new layer.Tile(this);
    super.ngOnInit();
  }
}

@Component({
  selector: 'aol-layer-vector',
  template: `<ng-content></ng-content>`
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy {
  public source: source.Vector;

  @Input('renderBuffer') renderBuffer: number|undefined = undefined;

  constructor(@Host() map: MapComponent){
    super(map);
  }

  ngOnInit(){
    console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new layer.Vector(this);
    super.ngOnInit();
  }
}
