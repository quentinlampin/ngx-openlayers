import {Component, Input, Optional} from '@angular/core';
import {MapComponent} from './map.component';
import {GeometryLinestringComponent, GeometryPointComponent, GeometryPolygonComponent} from './geometry.components';
import {ViewComponent} from './view.component';
import {OverlayComponent} from './overlay.component';

@Component({
  selector: 'aol-coordinate',
  template: `<div class="aol-coordinate"></div>`
})
export class CoordinateComponent {
  private host: any;

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
}

@Component({
  selector: 'aol-collection-coordinates',
  template: `<div class="aol-collection-coordinates"></div>`
})
export class CollectionCoordinatesComponent {
  private host: any;

  @Input() coordinates: [number, number][];
  @Input() srid: string = 'EPSG:3857';

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
}
