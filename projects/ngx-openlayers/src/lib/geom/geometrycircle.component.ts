import { Component, effect, input } from '@angular/core';

import { Circle } from 'ol/geom';

import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'aol-geometry-circle',
  standalone: true,
  template: `<ng-content></ng-content>`,
})
export class GeometryCircleComponent extends SimpleGeometryComponent {
  readonly componentType = 'geometry-circle';

  readonly radius = input<number>();

  readonly instance = new Circle([0, 0]);

  constructor() {
    super();

    effect(() => {
      const radius = this.radius();

      if (radius !== undefined) {
        this.instance.setRadius(radius);
      }
    });
  }
}
