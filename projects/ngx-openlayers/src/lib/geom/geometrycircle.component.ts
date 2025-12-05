import { Component, Input } from '@angular/core';
import { Circle } from 'ol/geom';
import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'aol-geometry-circle',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class GeometryCircleComponent extends SimpleGeometryComponent {
  componentType = 'geometry-circle';
  instance = new Circle([0, 0]);

  @Input()
  get radius(): number {
    return this.instance.getRadius();
  }
  set radius(radius: number) {
    this.instance.setRadius(radius);
  }
}
