import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { LineString } from 'ol/geom';

@Component({
  selector: 'aol-geometry-linestring',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GeometryLinestringComponent extends SimpleGeometryComponent {
  public componentType = 'geometry-linestring';
  public instance = new LineString([
    [0, 0],
    [1, 1],
  ]);
}
