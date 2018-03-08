import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { geom, proj } from 'openlayers';

@Component({
  selector: 'aol-geometry-linestring',
  template: `<ng-content></ng-content>`
})
export class GeometryLinestringComponent extends SimpleGeometryComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-linestring';
  public instance: ol.geom.LineString;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
    // console.log('instancing aol-geometry-linestring');
  }

  ngOnInit() {
    this.instance = new geom.LineString([[0, 0], [1, 1]]);
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
