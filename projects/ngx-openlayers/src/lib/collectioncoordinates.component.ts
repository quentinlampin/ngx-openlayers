import { Component, effect, inject, input } from '@angular/core';

import { Coordinate } from 'ol/coordinate';
import { transform } from 'ol/proj';

import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { MapComponent } from './map.component';
import { ObjectEvent } from 'ol/Object';

@Component({
  selector: 'aol-collection-coordinates',
  standalone: true,
  template: `<div class="aol-collection-coordinates"></div>`,
})
export class CollectionCoordinatesComponent {
  private readonly map = inject(MapComponent);

  readonly coordinates = input<Coordinate[] | Coordinate[][] | Coordinate[][][]>();

  readonly srid = input('EPSG:3857');

  private readonly host:
    | GeometryLinestringComponent
    | GeometryPolygonComponent
    | GeometryMultiPointComponent
    | GeometryMultiLinestringComponent
    | GeometryMultiPolygonComponent;

  private mapSrid = 'EPSG:3857';

  constructor() {
    const geometryComponent =
      inject(GeometryLinestringComponent, { optional: true }) ??
      inject(GeometryPolygonComponent, { optional: true }) ??
      inject(GeometryMultiPointComponent, { optional: true }) ??
      inject(GeometryMultiLinestringComponent, { optional: true }) ??
      inject(GeometryMultiPolygonComponent, { optional: true });

    if (!geometryComponent) {
      throw new Error('aol-collection-coordinates must be a child of a geometry component');
    }

    this.host = geometryComponent;

    const mapInstance = this.map.instance;

    if (mapInstance) {
      mapInstance.on('change:view', (event) => this.onMapViewChanged(event));

      this.mapSrid = mapInstance.getView().getProjection().getCode();
    }

    effect(() => {
      this.coordinates();
      this.srid();

      this.transformCoordinates();
    });
  }

  private onMapViewChanged(event: ObjectEvent): void {
    this.mapSrid = event.target.get(event.key).getProjection().getCode();

    this.transformCoordinates();
  }

  private transformCoordinates(): void {
    const coordinates = this.coordinates();

    if (!coordinates || !this.host.instance) {
      return;
    }

    const srid = this.srid();

    if (srid === this.mapSrid) {
      this.host.instance.setCoordinates(coordinates as never);
      return;
    }

    if (this.host instanceof GeometryLinestringComponent || this.host instanceof GeometryMultiPointComponent) {
      this.host.instance.setCoordinates(
        (coordinates as Coordinate[]).map((coordinate) => transform(coordinate, srid, this.mapSrid))
      );

      return;
    }

    if (this.host instanceof GeometryPolygonComponent || this.host instanceof GeometryMultiLinestringComponent) {
      this.host.instance.setCoordinates(
        (coordinates as Coordinate[][]).map((line) =>
          line.map((coordinate) => transform(coordinate, srid, this.mapSrid))
        )
      );

      return;
    }

    this.host.instance.setCoordinates(
      (coordinates as Coordinate[][][]).map((polygon) =>
        polygon.map((line) => line.map((coordinate) => transform(coordinate, srid, this.mapSrid)))
      )
    );
  }
}
