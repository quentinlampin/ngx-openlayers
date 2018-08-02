import { Component, Optional, OnChanges, Input, SimpleChanges } from '@angular/core';
import { proj, Coordinate } from 'openlayers';
import { MapComponent } from './map.component';
import { GeometryPointComponent, GeometryLinestringComponent, GeometryPolygonComponent } from './geometry.components';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';

@Component({
  selector: 'aol-coordinate',
  template: `<div class="aol-coordinate"></div>`,
})
export class CoordinateComponent implements OnChanges {
  private host: any;

  @Input()
  x: number;
  @Input()
  y: number;
  @Input()
  srid = 'EPSG:3857';

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

  ngOnChanges(changes: SimpleChanges) {
    let referenceProjection: proj.Projection;
    let referenceProjectionCode: string;
    let transformedCoordinates: number[];

    referenceProjection = this.map.instance.getView().getProjection();
    referenceProjectionCode = referenceProjection ? referenceProjection.getCode() : 'EPSG:3857';

    if (this.srid === referenceProjectionCode) {
      transformedCoordinates = [this.x, this.y];
    } else {
      transformedCoordinates = proj.transform([this.x, this.y], this.srid, referenceProjectionCode);
    }

    switch (this.host.componentType) {
      case 'geometry-point':
        this.host.instance.setCoordinates(transformedCoordinates);
        break;
      case 'view':
        this.host.instance.setCenter(transformedCoordinates);
        break;
      case 'overlay':
        this.host.instance.setPosition(transformedCoordinates);
        break;
    }
  }
}

@Component({
  selector: 'aol-collection-coordinates',
  template: `<div class="aol-collection-coordinates"></div>`,
})
export class CollectionCoordinatesComponent implements OnChanges {
  private host: any;

  @Input()
  coordinates: [number, number][];
  @Input()
  srid = 'EPSG:3857';

  constructor(
    private map: MapComponent,
    @Optional() geometryLinestring: GeometryLinestringComponent,
    @Optional() geometryPolygon: GeometryPolygonComponent
  ) {
    // console.log('creating aol-collection-coordinates');
    if (!!geometryLinestring) {
      this.host = geometryLinestring;
    } else if (!!geometryPolygon) {
      this.host = geometryPolygon;
    } else {
      throw new Error('aol-collection-coordinates must be a child of a geometry component');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    let referenceProjection: proj.Projection;
    let referenceProjectionCode: string;
    let transformedCoordinates: Array<Coordinate>;

    // console.log('coordinates change: ', this.coordinates);

    referenceProjection = this.map.instance.getView().getProjection();
    referenceProjectionCode = referenceProjection ? referenceProjection.getCode() : 'EPSG:3857';

    if (this.srid === referenceProjectionCode) {
      transformedCoordinates = this.coordinates;
    } else {
      transformedCoordinates = [];
      this.coordinates.forEach(
        function(coordinate: Coordinate) {
          transformedCoordinates.push(proj.transform(coordinate, this.srid, referenceProjectionCode));
        }.bind(this)
      );
    }
    switch (this.host.componentType) {
      case 'geometry-linestring':
        this.host.instance.setCoordinates(transformedCoordinates);
        break;
      case 'geometry-polygon':
        this.host.instance.setCoordinates([transformedCoordinates]);
        break;
      default:
        throw new Error('aol-collection-coordinates host is of unknown type: ' + this.host.componentType);
      // break;
    }
  }
}
