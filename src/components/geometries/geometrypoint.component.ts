import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { geom, proj } from 'openlayers';

@Component({
  selector: 'aol-geometry-point',
  template: `<ng-content></ng-content>`
})
export class GeometryPointComponent extends SimpleGeometryComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-point';
  public instance: ol.geom.Point;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
    // console.log('creating aol-geometry-point');
  }

  ngOnInit() {
    this.instance = new geom.Point([0, 0]);
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
