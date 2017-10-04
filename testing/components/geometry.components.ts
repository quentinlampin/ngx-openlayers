import {Component} from '@angular/core';
import {geom} from 'openlayers';
import {FeatureComponent} from './feature.component';

@Component({
  selector: 'aol-geometry-linestring',
  template: `<ng-content></ng-content>`
})
export class GeometryLinestringComponent {
  public componentType: string = 'geometry-linestring';
  public instance: geom.LineString;

  constructor(private host: FeatureComponent) {}
}

@Component({
  selector: 'aol-geometry-point',
  template: `<ng-content></ng-content>`
})
export class GeometryPointComponent {
  public componentType: string = 'geometry-point';
  public instance: geom.Point;

  constructor(private host: FeatureComponent) {}
}

@Component({
  selector: 'aol-geometry-polygon',
  template: `<ng-content></ng-content>`
})
export class GeometryPolygonComponent {
  public componentType: string = 'geometry-polygon';
  public instance: geom.Polygon;

  constructor(private host: FeatureComponent) {}
}
