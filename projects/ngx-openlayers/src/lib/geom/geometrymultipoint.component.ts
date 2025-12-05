import { Component } from '@angular/core';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MultiPoint } from 'ol/geom';

@Component({
  selector: 'aol-geometry-multipoint',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class GeometryMultiPointComponent extends SimpleGeometryComponent {
  public componentType = 'geometry-multipoint';
  public instance = new MultiPoint([
    [0, 0],
    [1, 1],
  ]);
}
