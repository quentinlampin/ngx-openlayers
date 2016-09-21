import { Component, Host, OnDestroy } from '@angular/core';
import { geom } from 'openlayers';
import { FeatureComponent } from "./feature.component";

@Component({
  selector: 'aol-geometry-point',
  template: `<ng-content></ng-content>`
})
export class GeometryPointComponent extends geom.Point implements OnDestroy {
  _host_: FeatureComponent;
  constructor(@Host() feature: FeatureComponent){
    console.log('instancing aol-geometry-point');
    super([0,0]); // defaulting coordinates to [0,0]. To be overridden in child component.
    this._host_ = feature;
    this._host_.setGeometry(this);
  }

  ngOnDestroy(){
    this._host_.setGeometry(null);
  }
}

@Component({
  selector: 'aol-geometry-linestring',
  template: `<ng-content></ng-content>`
})
export class GeometryLinestringComponent extends geom.LineString implements OnDestroy {
  _host_: FeatureComponent;
  constructor(@Host() feature: FeatureComponent){
    console.log('instancing aol-geometry-linestring');
    super([]);
    this._host_ = feature;
    this._host_.setGeometry(this);
  }

  ngOnDestroy(){
    this._host_.setGeometry(null);
  }
}