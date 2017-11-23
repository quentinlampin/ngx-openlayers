import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FeatureComponent } from './feature.component';
import { MapSystemToken } from '../map-system';

@Component({
  selector: 'aol-geometry-linestring',
  template: `<ng-content></ng-content>`
})
export class GeometryLinestringComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-linestring';
  public instance: ol.geom.LineString;

  constructor(@Inject(MapSystemToken) protected mapSystem: any,
              private host: FeatureComponent) {
    // console.log('instancing aol-geometry-linestring');
  }

  ngOnInit() {
    this.instance = new this.mapSystem.geom.LineString([]);
    this.host.instance.setGeometry(this.instance);
  }
  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}

@Component({
  selector: 'aol-geometry-point',
  template: `<ng-content></ng-content>`
})
export class GeometryPointComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-point';
  public instance: ol.geom.Point;

  constructor(@Inject(MapSystemToken) protected mapSystem: any,
              private host: FeatureComponent) {
    // console.log('creating aol-geometry-point');
  }

  ngOnInit() {
    this.instance = new this.mapSystem.geom.Point([0, 0]); // defaulting coordinates to [0,0]. To be overridden in child component.
    this.host.instance.setGeometry(this.instance);
  }

  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}

@Component({
  selector: 'aol-geometry-polygon',
  template: `<ng-content></ng-content>`
})
export class GeometryPolygonComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-polygon';
  public instance: ol.geom.Polygon;

  constructor(@Inject(MapSystemToken) protected mapSystem: any,
              private host: FeatureComponent) {
    // console.log('creating aol-geometry-polygon');
  }

  ngOnInit() {
    // defaulting coordinates to [0,0]. To be overridden in child component.
    this.instance = new this.mapSystem.geom.Polygon([ [ [0, 0], [1, 0], [1, 1] ] ]);
    this.host.instance.setGeometry(this.instance);
  }

  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}
