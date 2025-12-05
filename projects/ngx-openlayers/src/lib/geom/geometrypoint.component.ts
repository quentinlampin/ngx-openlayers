import { Component } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { Point } from 'ol/geom';

@Component({
  selector: 'aol-geometry-point',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class GeometryPointComponent extends SimpleGeometryComponent {
  public componentType = 'geometry-point';
  public instance = new Point([0, 0]);
}
