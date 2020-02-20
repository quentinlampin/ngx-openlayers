import { Component, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { Polygon } from 'ol/geom';

@Component({
  selector: 'aol-geometry-polygon',
  template: ` <ng-content></ng-content> `,
})
export class GeometryPolygonComponent extends SimpleGeometryComponent implements OnInit {
  public componentType = 'geometry-polygon';
  public instance: Polygon;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit() {
    this.instance = new Polygon([
      [
        [0, 0],
        [1, 1],
        [0, 1],
      ],
    ]);
    super.ngOnInit();
  }
}
