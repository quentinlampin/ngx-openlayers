import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { Coordinate } from 'ol/coordinate';
import { transform } from 'ol/proj';

@Component({
  selector: 'aol-collection-coordinates',
  template: `
    <div class="aol-collection-coordinates"></div>
  `,
})
export class CollectionCoordinatesComponent implements OnChanges, OnInit {
  private host: any;
  private mapSrid = 'EPSG:3857';

  @Input()
  coordinates: Coordinate[] | Coordinate[][] | Coordinate[][][];
  @Input()
  srid = 'EPSG:3857';

  constructor(
    private map: MapComponent,
    @Optional() geometryLinestring: GeometryLinestringComponent,
    @Optional() geometryPolygon: GeometryPolygonComponent,
    @Optional() geometryMultipoint: GeometryMultiPointComponent,
    @Optional() geometryMultilinestring: GeometryMultiLinestringComponent,
    @Optional() geometryMultipolygon: GeometryMultiPolygonComponent
  ) {
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
    this.map.instance.on('change:view', e => this.onMapViewChanged(e));
    this.mapSrid = this.map.instance
      .getView()
      .getProjection()
      .getCode();
    this.transformCoordinates();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.transformCoordinates();
  }

  private onMapViewChanged(event) {
    this.mapSrid = event.target
      .get(event.key)
      .getProjection()
      .getCode();
    this.transformCoordinates();
  }

  private transformCoordinates() {
    let transformedCoordinates: Coordinate[] | Coordinate[][] | Coordinate[][][];

    if (this.srid === this.mapSrid) {
      transformedCoordinates = this.coordinates;
    } else {
      switch (this.host.componentType) {
        case 'geometry-linestring':
        case 'geometry-multipoint':
          transformedCoordinates = (<Coordinate[]>this.coordinates).map(c => transform(c, this.srid, this.mapSrid));
          break;
        case 'geometry-polygon':
        case 'geometry-multilinestring':
          transformedCoordinates = (<Coordinate[][]>this.coordinates).map(cc =>
            cc.map(c => transform(c, this.srid, this.mapSrid))
          );
          break;
        case 'geometry-multipolygon':
          transformedCoordinates = (<Coordinate[][][]>this.coordinates).map(ccc =>
            ccc.map(cc => cc.map(c => transform(c, this.srid, this.mapSrid)))
          );
          break;
      }
    }

    this.host.instance.setCoordinates(transformedCoordinates);
  }
}
