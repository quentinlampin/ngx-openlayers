import {Component, Optional, OnChanges, Input, SimpleChanges, OnInit} from '@angular/core';
import { proj, Coordinate } from 'openlayers';
import { MapComponent } from './map.component';
import {
  GeometryPointComponent, GeometryLinestringComponent, GeometryPolygonComponent,
  GeometryMultiPointComponent, GeometryMultiLinestringComponent, GeometryMultiPolygonComponent
} from './geometries';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';

@Component({
  selector: 'aol-coordinate',
  template: `<div class="aol-coordinate"></div>`
})
export class CoordinateComponent implements OnChanges, OnInit {
  private host: any;
  private mapSrid = 'EPSG:3857';

  @Input() x: number;
  @Input() y: number;
  @Input() srid: string = 'EPSG:3857';

  constructor(
    private map: MapComponent,
    @Optional() viewHost: ViewComponent,
    @Optional() geometryPointHost: GeometryPointComponent,
    @Optional() overlayHost: OverlayComponent
  ) {
    // console.log('instancing aol-coordinate');
    if (geometryPointHost !== null) {
      this.host = geometryPointHost;
    } else if (viewHost !== null) {
      this.host = viewHost;
    } else if (overlayHost !== null) {
      this.host = overlayHost;
    }
  }

  ngOnInit() {
    this.map.instance.on('change:view', (e: ol.ObjectEvent) => this.onMapViewChanged(e));
    this.mapSrid = this.map.instance.getView().getProjection().getCode();
    this.transformCoordinates();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.transformCoordinates();
  }

  private onMapViewChanged(event: ol.ObjectEvent) {
    this.mapSrid = (<ol.View> (<ol.Object> event.target).get(event.key)).getProjection().getCode();
    this.transformCoordinates();
  }

  private transformCoordinates() {
    let transformCoordinates: number[];

    if (this.srid === this.mapSrid) {
      transformCoordinates = [this.x, this.y];
    } else {
      transformCoordinates = ol.proj.transform([this.x, this.y], this.srid, this.mapSrid);
    }

    switch (this.host.componentType) {
      case 'geometry-point':
        this.host.instance.setCoordinates(transformCoordinates);
        break;
      case 'view':
        this.host.instance.setCenter(transformCoordinates);
        break;
      case 'overlay':
        this.host.instance.setPosition(transformCoordinates);
        break;
    }
  }
}

@Component({
  selector: 'aol-collection-coordinates',
  template: `<div class="aol-collection-coordinates"></div>`
})
export class CollectionCoordinatesComponent implements OnChanges, OnInit {
  private host: any;
  private mapSrid = 'EPSG:3857';

  @Input() coordinates: ol.Coordinate[]|ol.Coordinate[][]|ol.Coordinate[][][];
  @Input() srid: string = 'EPSG:3857';

  constructor(
      private map: MapComponent,
      @Optional() geometryLinestring:      GeometryLinestringComponent,
      @Optional() geometryPolygon:         GeometryPolygonComponent,
      @Optional() geometryMultipoint:      GeometryMultiPointComponent,
      @Optional() geometryMultilinestring: GeometryMultiLinestringComponent,
      @Optional() geometryMultipolygon:    GeometryMultiPolygonComponent
  ) {
    // console.log('creating aol-collection-coordinates');
    if (!!geometryLinestring) {
      this.host = geometryLinestring;
    } else if (!!geometryPolygon) {
      this.host = geometryPolygon;
    } else if (!!geometryMultipoint) {
      this.host = geometryMultipoint;
    } else if (!!geometryMultilinestring) {
      this.host = geometryMultilinestring;
    } else if (!!geometryMultipolygon) {
      this.host = geometryMultipolygon;
    } else {
      throw new Error('aol-collection-coordinates must be a child of a geometry component');
    }
  }

  ngOnInit() {
    this.map.instance.on('change:view', (e: ol.ObjectEvent) => this.onMapViewChanged(e));
    this.mapSrid = this.map.instance.getView().getProjection().getCode();
    this.transformCoordinates();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.transformCoordinates();
  }

  private onMapViewChanged(event: ol.ObjectEvent) {
    this.mapSrid = (<ol.View> (<ol.Object> event.target).get(event.key)).getProjection().getCode();
    this.transformCoordinates();
  }

  private transformCoordinates() {
    let newCoordinates: ol.Coordinate[]|ol.Coordinate[][]|ol.Coordinate[][][];

    if (this.srid === this.mapSrid) {
      newCoordinates = this.coordinates;
    } else {
      switch (this.host.componentType) {
        case 'geometry-linestring':
        case 'geometry-multipoint':
          newCoordinates = (<ol.Coordinate[]> this.coordinates).map(c =>
            ol.proj.transform(c, this.srid, this.mapSrid)
          );
          break;
        case 'geometry-polygon':
        case 'geometry-multilinestring':
          newCoordinates = (<ol.Coordinate[][]> this.coordinates).map(cc =>
            cc.map(c => ol.proj.transform(c, this.srid, this.mapSrid))
          );
          break;
        case 'geometry-multipolygon':
          newCoordinates = (<ol.Coordinate[][][]> this.coordinates).map(ccc =>
            ccc.map(cc =>
              cc.map(c => ol.proj.transform(c, this.srid, this.mapSrid))
            )
          );
          break;
      }
    }

    this.host.instance.setCoordinates(newCoordinates);
  }
}
