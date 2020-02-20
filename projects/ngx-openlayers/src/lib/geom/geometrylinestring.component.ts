import { Component, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { LineString } from 'ol/geom';

@Component({
  selector: 'aol-geometry-linestring',
  template: ` <ng-content></ng-content> `,
})
export class GeometryLinestringComponent extends SimpleGeometryComponent implements OnInit {
  public componentType = 'geometry-linestring';
  public instance: LineString;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit() {
    this.instance = new LineString([
      [0, 0],
      [1, 1],
    ]);
    super.ngOnInit();
  }
}
