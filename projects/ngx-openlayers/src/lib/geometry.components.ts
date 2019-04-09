import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Circle, LineString, Point, Polygon } from 'ol/geom';
import { FeatureComponent } from './feature.component';

@Component({
  selector: 'aol-geometry-linestring',
  template: `
    <ng-content></ng-content>
  `,
})
export class GeometryLinestringComponent implements OnInit, OnDestroy {
  public componentType = 'geometry-linestring';
  public instance: LineString;

  constructor(private host: FeatureComponent) {
    // console.log('instancing aol-geometry-linestring');
  }

  ngOnInit() {
    this.instance = new LineString([]);
    this.host.instance.setGeometry(this.instance);
  }
  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}

@Component({
  selector: 'aol-geometry-point',
  template: `
    <ng-content></ng-content>
  `,
})
export class GeometryPointComponent implements OnInit, OnDestroy {
  public componentType = 'geometry-point';
  public instance: Point;

  constructor(private host: FeatureComponent) {
    // console.log('creating aol-geometry-point');
  }

  ngOnInit() {
    this.instance = new Point([0, 0]); // defaulting coordinates to [0,0]. To be overridden in child component.
    this.host.instance.setGeometry(this.instance);
  }

  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}

@Component({
  selector: 'aol-geometry-polygon',
  template: `
    <ng-content></ng-content>
  `,
})
export class GeometryPolygonComponent implements OnInit, OnDestroy {
  public componentType = 'geometry-polygon';
  public instance: Polygon;

  constructor(private host: FeatureComponent) {
    // console.log('creating aol-geometry-polygon');
  }

  ngOnInit() {
    // defaulting coordinates to [0,0]. To be overridden in child component.
    this.instance = new Polygon([[[0, 0], [1, 0], [1, 1]]]);
    this.host.instance.setGeometry(this.instance);
  }

  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}

@Component({
  selector: 'aol-geometry-circle',
  template: `
    <ng-content></ng-content>
  `,
})
export class GeometryCircleComponent implements OnInit {
  public componentType = 'geometry-circle';
  public instance: Circle;

  @Input()
  get radius(): number {
    return this.instance.getRadius();
  }
  set radius(radius: number) {
    this.instance.setRadius(radius);
  }

  constructor(private host: FeatureComponent) {
    // defaulting coordinates to [0,0]. To be overridden in child component.
    this.instance = new Circle([0, 0]);
  }

  ngOnInit() {
    this.host.instance.setGeometry(this.instance);
  }
}
