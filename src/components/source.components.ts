import { Component, Host, OnDestroy, Input, OnInit, forwardRef, ContentChild, AfterContentInit } from '@angular/core';
import { source, AttributionLike, Size, ProjectionLike, TileUrlFunctionType, format, tilegrid } from 'openlayers';
import { LayerTileComponent, LayerVectorComponent, LayerComponent, LayerVectorTileComponent } from './layer.components';
import { FormatComponent } from './format.component';
import { TileGridComponent } from './tilegrid.component';

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
  template: `<div class="aol-source-osm"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }
  ]
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
  template: `<div class="aol-source-bingmaps"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }
  ]
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
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }
  ]
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

@Component({
  selector: 'aol-source-xyz',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }
  ]
})
export class SourceXYZComponent extends SourceComponent implements OnInit {

  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() opaque: boolean;
  @Input() projection: string|undefined;
  @Input() reprojectionErrorThreshold: number;
  @Input() minZoom: number;
  @Input() maxZoom: number;
  @Input() tilePixelRatio: number;
  @Input() tileSize: number|Size;
  @Input() tileUrlFunction: TileUrlFunctionType;
  @Input() url: string;
  @Input() urls: string[];
  @Input() wrapX: boolean;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    // console.log('creating ol.source.XYZ instance with:', this);
    this.instance = new source.XYZ(this);
    this.host.instance.setSource(this.instance);
  }
}

@Component({
  selector: 'aol-source-vectortile',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }
  ]
})
export class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {

  @Input() cacheSize: number;
  @Input() overlaps: boolean;
  @Input() projection: ProjectionLike;
  @Input() tilePixelRatio: number;
  @Input() tileUrlFunction: TileUrlFunctionType;
  @Input() url: string;
  @Input() urls: string[];
  @Input() wrapX: boolean;

  @ContentChild(FormatComponent) formatComponent: FormatComponent;
  format: format.Feature;
  @ContentChild(TileGridComponent) tileGridComponent: TileGridComponent;
  tileGrid: tilegrid.TileGrid;

  constructor(@Host() layer: LayerVectorTileComponent) {
    super(layer);
  }

  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new source.VectorTile(this);
    this.host.instance.setSource(this.instance);
  }
}
