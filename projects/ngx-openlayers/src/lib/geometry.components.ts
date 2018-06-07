import { Component, OnInit, OnDestroy } from '@angular/core';
import { geom } from 'openlayers';
import { FeatureComponent } from './feature.component';

@Component({
  selector: 'aol-geometry-linestring',
  template: `<ng-content></ng-content>`,
})
export class GeometryLinestringComponent implements OnInit, OnDestroy {
  public componentType = 'geometry-linestring';
  public instance: geom.LineString;

  constructor(private host: FeatureComponent) {
    // console.log('instancing aol-geometry-linestring');
  }

  ngOnInit() {
    this.instance = new geom.LineString([]);
    this.host.instance.setGeometry(this.instance);
  }
  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}

@Component({
  selector: 'aol-geometry-point',
  template: `<ng-content></ng-content>`,
})
export class GeometryPointComponent implements OnInit, OnDestroy {
  public componentType = 'geometry-point';
  public instance: geom.Point;

  constructor(private host: FeatureComponent) {
    // console.log('creating aol-geometry-point');
  }

  ngOnInit() {
    this.instance = new geom.Point([0, 0]); // defaulting coordinates to [0,0]. To be overridden in child component.
    this.host.instance.setGeometry(this.instance);
  }

  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}

@Component({
  selector: 'aol-geometry-polygon',
  template: `<ng-content></ng-content>`,
})
export class GeometryPolygonComponent implements OnInit, OnDestroy {
  public componentType = 'geometry-polygon';
  public instance: geom.Polygon;

  constructor(private host: FeatureComponent) {
    // console.log('creating aol-geometry-polygon');
  }

  ngOnInit() {
    // defaulting coordinates to [0,0]. To be overridden in child component.
    this.instance = new geom.Polygon([[[0, 0], [1, 0], [1, 1]]]);
    this.host.instance.setGeometry(this.instance);
  }

  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}
