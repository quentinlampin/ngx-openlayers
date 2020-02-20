import { Component, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPoint } from 'ol/geom';

@Component({
  selector: 'aol-geometry-multipoint',
  template: ` <ng-content></ng-content> `,
})
export class GeometryMultiPointComponent extends SimpleGeometryComponent implements OnInit {
  public componentType = 'geometry-multipoint';
  public instance: MultiPoint;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit() {
    this.instance = new MultiPoint([
      [0, 0],
      [1, 1],
    ]);
    super.ngOnInit();
  }
}
