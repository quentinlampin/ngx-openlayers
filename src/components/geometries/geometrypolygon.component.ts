import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { geom, proj } from 'openlayers';

@Component({
  selector: 'aol-geometry-polygon',
  template: `<ng-content></ng-content>`
})
export class GeometryPolygonComponent extends SimpleGeometryComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-polygon';
  public instance: ol.geom.Polygon;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
    // console.log('creating aol-geometry-polygon');
  }

  ngOnInit() {
    this.instance = new geom.Polygon([[[0, 0], [1, 1], [0, 1]]]);
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
