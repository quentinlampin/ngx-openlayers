import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { Polygon } from 'ol/geom';

@Component({
  selector: 'aol-geometry-polygon',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GeometryPolygonComponent extends SimpleGeometryComponent {
  public componentType = 'geometry-polygon';
  public instance = new Polygon([
    [
      [0, 0],
      [1, 1],
      [0, 1],
    ],
  ]);
}
