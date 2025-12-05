import { Component } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { LineString } from 'ol/geom';

@Component({
  selector: 'aol-geometry-linestring',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class GeometryLinestringComponent extends SimpleGeometryComponent {
  public componentType = 'geometry-linestring';
  public instance = new LineString([
    [0, 0],
    [1, 1],
  ]);
}
