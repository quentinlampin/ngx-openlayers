import { Component, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { Point } from 'ol/geom';

@Component({
  selector: 'aol-geometry-point',
  template: ` <ng-content></ng-content> `,
})
export class GeometryPointComponent extends SimpleGeometryComponent implements OnInit {
  public componentType = 'geometry-point';
  public instance: Point;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit() {
    this.instance = new Point([0, 0]);
    super.ngOnInit();
  }
}
