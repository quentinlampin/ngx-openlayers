import { Component, Host, OnInit, OnDestroy } from '@angular/core';
import { geom } from 'openlayers';
import { FeatureComponent } from "./feature.component";

@Component({
  selector: 'aol-geometry-point',
  template: `<ng-content></ng-content>`
})
export class GeometryPointComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-point';
  public instance: geom.Point;
  private host: FeatureComponent;
  

  constructor(@Host() feature: FeatureComponent){
    console.log('creating aol-geometry-point');
    this.host = feature;
  }

  ngOnInit() {
    this.instance = new geom.Point([0,0]); // defaulting coordinates to [0,0]. To be overridden in child component.
    this.host.instance.setGeometry(this.instance);
  }

  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}

@Component({
  selector: 'aol-geometry-linestring',
  template: `<ng-content></ng-content>`
})
export class GeometryLinestringComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-linestring';
  public instance: geom.LineString;
  private host: FeatureComponent;

  constructor(@Host() feature: FeatureComponent){
    console.log('instancing aol-geometry-linestring');
    this.host = feature;
  }

  ngOnInit() {
    this.instance = new geom.LineString([]);
    this.host.instance.setGeometry(this.instance);
  }
  ngOnDestroy() {
    // this.host.setGeometry(null);
  }
}
