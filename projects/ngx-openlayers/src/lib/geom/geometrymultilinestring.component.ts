import { Component } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MultiLineString } from 'ol/geom';

@Component({
  selector: 'aol-geometry-multilinestring',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class GeometryMultiLinestringComponent extends SimpleGeometryComponent {
  public componentType = 'geometry-multilinestring';
  public instance = new MultiLineString([
    [
      [0, 0],
      [1, 1],
    ],
  ]);
}
