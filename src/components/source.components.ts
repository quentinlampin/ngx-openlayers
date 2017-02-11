import { Component, Host, OnDestroy, Input, OnInit } from '@angular/core';
import { source, AttributionLike } from 'openlayers';
import { LayerTileComponent, LayerVectorComponent, LayerComponent } from './layer.components';

export class SourceComponent implements OnInit, OnDestroy {
  public host: LayerComponent;
  public instance: any;
  public componentType: string = 'source';

  constructor(layer: LayerComponent) {
    this.host = layer;
  }

  ngOnInit() {
    this.host.instance.setSource(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.setSource(null);
  }
}

@Component({
  selector: 'aol-source-osm',
  template: `<div class="aol-source-osm"></div>`
})
export class SourceOsmComponent extends SourceComponent implements OnInit {

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.OSM(this);
    this.host.instance.setSource(this.instance);
  }
}

@Component({
  selector: 'aol-source-bingmaps',
  template: `<div class="aol-source-bingmaps"></div>`
})

export class SourceBingmapsComponent extends SourceComponent implements OnInit {
  @Input() key: string;
  @Input() imagerySet: 'Road'|'Aerial'|'AerialWithLabels'|'collinsBart'|'ordnanceSurvey' = 'Aerial';

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.BingMaps(this);
    this.host.instance.setSource(this.instance);
  }
}

@Component({
  selector: 'aol-source-vector',
  template: `<ng-content></ng-content>`
})
export class SourceVectorComponent extends SourceComponent implements OnInit {
  @Input() attributions: AttributionLike|undefined;
  @Input() overlaps: boolean|undefined;
  @Input() useSpatialIndex: boolean|undefined;
  @Input() wrapX: boolean|undefined;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
