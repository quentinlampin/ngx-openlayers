import { Component } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MultiPolygon } from 'ol/geom';

@Component({
  selector: 'aol-geometry-multipolygon',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class GeometryMultiPolygonComponent extends SimpleGeometryComponent {
  public componentType = 'geometry-multipolygon';
  public instance = new MultiPolygon([
    [
      [
        [0, 0],
        [1, 1],
        [0, 1],
      ],
    ],
  ]);
}
