import { Component, Input, OnChanges, OnInit, inject } from '@angular/core';
import { Coordinate } from 'ol/coordinate';
import { transform } from 'ol/proj';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { MapComponent } from './map.component';

@Component({
  selector: 'aol-collection-coordinates',
  template: ` <div class="aol-collection-coordinates"></div> `,
  standalone: true,
})
export class CollectionCoordinatesComponent implements OnChanges, OnInit {
  private map = inject(MapComponent);

  @Input()
  coordinates: Coordinate[] | Coordinate[][] | Coordinate[][][];
  @Input()
  srid = 'EPSG:3857';

  private readonly host:
    | GeometryLinestringComponent
    | GeometryPolygonComponent
    | GeometryMultiPointComponent
    | GeometryMultiLinestringComponent
    | GeometryMultiPolygonComponent;
  private mapSrid = 'EPSG:3857';

  constructor() {
    const geometryLinestring = inject(GeometryLinestringComponent, { optional: true });
    const geometryPolygon = inject(GeometryPolygonComponent, { optional: true });
    const geometryMultipoint = inject(GeometryMultiPointComponent, { optional: true });
    const geometryMultilinestring = inject(GeometryMultiLinestringComponent, { optional: true });
    const geometryMultipolygon = inject(GeometryMultiPolygonComponent, { optional: true });

    const geometryComponent =
      geometryLinestring ??
      geometryPolygon ??
      geometryMultipoint ??
      geometryMultilinestring ??
      geometryMultipolygon ??
      undefined;
    if (geometryComponent) {
      this.host = geometryComponent;
    } else {
      throw new Error('aol-collection-coordinates must be a child of a geometry component');
    }
  }

  ngOnInit(): void {
    this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
    this.mapSrid = this.map.instance.getView().getProjection().getCode();
    this.transformCoordinates();
  }

  ngOnChanges(): void {
    this.transformCoordinates();
  }

  private onMapViewChanged(event): void {
    this.mapSrid = event.target.get(event.key).getProjection().getCode();
    this.transformCoordinates();
  }

  private transformCoordinates(): void {
    if (this.srid === this.mapSrid) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.host.instance.setCoordinates(this.coordinates as any[]);
    } else if (this.host instanceof GeometryLinestringComponent || this.host instanceof GeometryMultiPointComponent) {
      this.host.instance.setCoordinates(
        (this.coordinates as Coordinate[]).map((c) => transform(c, this.srid, this.mapSrid))
      );
    } else if (this.host instanceof GeometryPolygonComponent || this.host instanceof GeometryMultiLinestringComponent) {
      this.host.instance.setCoordinates(
        (this.coordinates as Coordinate[][]).map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid)))
      );
    } else {
      this.host.instance.setCoordinates(
        (this.coordinates as Coordinate[][][]).map((ccc) =>
          ccc.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid)))
        )
      );
    }
  }
}
