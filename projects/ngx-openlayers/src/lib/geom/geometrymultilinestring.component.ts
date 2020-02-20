import { Component, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiLineString } from 'ol/geom';

@Component({
  selector: 'aol-geometry-multilinestring',
  template: ` <ng-content></ng-content> `,
})
export class GeometryMultiLinestringComponent extends SimpleGeometryComponent implements OnInit {
  public componentType = 'geometry-multilinestring';
  public instance: MultiLineString;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit() {
    this.instance = new MultiLineString([
      [
        [0, 0],
        [1, 1],
      ],
    ]);
    super.ngOnInit();
  }
}
