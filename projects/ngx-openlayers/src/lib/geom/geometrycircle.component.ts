import { Component, Input, OnInit, inject } from '@angular/core';
import { Circle } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import { SimpleGeometryComponent } from './simplegeometry.component';

@Component({
  selector: 'aol-geometry-circle',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class GeometryCircleComponent extends SimpleGeometryComponent implements OnInit {
  componentType = 'geometry-circle';
  instance: Circle;

  constructor() {
    const map = inject(MapComponent);
    const host = inject(FeatureComponent);

    super(map, host);
    // defaulting coordinates to [0,0]. To be overridden in child component.
    this.instance = new Circle([0, 0]);
  }

  @Input()
  get radius(): number {
    return this.instance.getRadius();
  }
  set radius(radius: number) {
    this.instance.setRadius(radius);
  }
}
