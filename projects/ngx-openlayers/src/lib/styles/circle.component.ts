import { Component, effect, inject, input } from '@angular/core';

import { Circle, Fill, Stroke } from 'ol/style';

import { StyleComponent } from './style.component';

@Component({
  selector: 'aol-style-circle',
  standalone: true,
  template: `<ng-content />`,
})
export class StyleCircleComponent {
  protected readonly host = inject(StyleComponent);

  readonly fill = input<Fill>();
  readonly radius = input<number>();
  readonly stroke = input<Stroke>();

  readonly componentType = 'style-circle';

  readonly instance: Circle;

  constructor() {
    this.instance = new Circle({
      fill: this.fill(),
      stroke: this.stroke(),
      radius: this.radius() ?? 0,
    });

    this.host.instance?.setImage(this.instance);
    this.host.update();

    effect(() => {
      const fill = this.fill();

      if (fill !== undefined) {
        this.instance.setFill(fill);
        this.update();
      }
    });

    effect(() => {
      const stroke = this.stroke();

      if (stroke !== undefined) {
        this.instance.setStroke(stroke);
        this.update();
      }
    });

    effect(() => {
      this.instance.setRadius(this.radius() ?? 0);

      this.host.update();
    });
  }

  /**
   * OpenLayers workaround:
   * Trigger a redraw by reapplying the radius after style changes.
   * See OL issues #6233 and #5775.
   */
  update(): void {
    this.instance.setRadius(this.radius() ?? 0);

    this.host.update();
  }

  setFill(fill: Fill): void {
    this.instance.setFill(fill);
    this.update();
  }

  setStroke(stroke: Stroke): void {
    this.instance.setStroke(stroke);
    this.update();
  }
}
