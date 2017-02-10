import { Component, Host, OnDestroy, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { layer, source, Extent, style, StyleFunction } from 'openlayers';
import { MapComponent } from './map.component';
import VectorTileRenderType = ol.layer.VectorTileRenderType;

export abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
  public host: MapComponent;
  public instance: any;
  public componentType: string = 'layer';

  @Input() opacity: number|undefined = undefined;
  @Input() visible: boolean|undefined = undefined;
  @Input() extent:	Extent|undefined = undefined;
  @Input() zIndex:	number|undefined = undefined;
  @Input() minResolution: number|undefined = undefined;
  @Input() maxResolution: number|undefined = undefined;

  constructor(map: MapComponent) {
    this.host = map;
  }

  ngOnInit() {
    this.host.instance.addLayer(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.removeLayer(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      properties[key] = changes[key].currentValue;
    }
    // console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}

@Component({
  selector: 'aol-layer-tile',
  template: `<ng-content></ng-content>`
})
export class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy {
  public source: source.Tile;

  @Input() preload: number|undefined = undefined;
  @Input() useInterimTilesOnError: boolean|undefined = undefined;

  constructor(@Host() map: MapComponent) {
    super(map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Tile instance with:', this);
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

  @Input() renderBuffer: number|undefined = undefined;

  constructor(@Host() map: MapComponent) {
    super(map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new layer.Vector(this);
    super.ngOnInit();
  }
}

@Component({
  selector: 'aol-layer-vectortile',
  template: `<ng-content></ng-content>`
})
export class LayerVectorTileComponent extends LayerComponent implements OnInit {
  public source: source.VectorTile;

  @Input() renderBuffer: number;
  @Input() renderMode: VectorTileRenderType|string;
  /* not marked as optional in the typings */
  @Input() renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number;
  @Input() style: (style.Style | style.Style[] | StyleFunction);
  @Input() updateWhileAnimating: boolean;
  @Input() updateWhileInteracting: boolean;
  @Input() visible: boolean;

  constructor(@Host() map: MapComponent) {
    super(map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.VectorTile instance with:', this);
    this.instance = new layer.VectorTile(this);
    super.ngOnInit();
  }
}
