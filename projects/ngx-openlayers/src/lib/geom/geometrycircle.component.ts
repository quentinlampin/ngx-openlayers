import { Component, Input, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { Circle } from 'ol/geom';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-geometry-circle',
  template: ` <ng-content></ng-content> `,
})
export class GeometryCircleComponent extends SimpleGeometryComponent implements OnInit {
  public componentType = 'geometry-circle';
  public instance: Circle;

  @Input()
  get radius(): number {
    return this.instance.getRadius();
  }
  set radius(radius: number) {
    this.instance.setRadius(radius);
  }

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
    // defaulting coordinates to [0,0]. To be overridden in child component.
    this.instance = new Circle([0, 0]);
  }
}
