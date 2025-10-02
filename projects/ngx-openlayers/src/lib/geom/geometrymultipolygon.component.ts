import { Component, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPolygon } from 'ol/geom';

@Component({
  selector: 'aol-geometry-multipolygon',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class GeometryMultiPolygonComponent extends SimpleGeometryComponent implements OnInit {
  public componentType = 'geometry-multipolygon';
  public instance: MultiPolygon;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
  }

  ngOnInit(): void {
    this.instance = new MultiPolygon([
      [
        [
          [0, 0],
          [1, 1],
          [0, 1],
        ],
      ],
    ]);
    super.ngOnInit();
  }
}
