import { Component, effect, inject, input } from '@angular/core';

import { Color } from 'ol/color';
import { ColorLike } from 'ol/colorlike';
import { Stroke } from 'ol/style';

import { StyleCircleComponent } from './circle.component';
import { StyleComponent } from './style.component';
import { StyleTextComponent } from './text.component';

@Component({
  selector: 'aol-style-stroke',
  standalone: true,
  template: `<div class="aol-style-stroke"></div>`,
})
export class StyleStrokeComponent {
  readonly color = input<Color | ColorLike>();
  readonly lineCap = input<CanvasLineCap>();
  readonly lineDash = input<number[]>();
  readonly lineJoin = input<CanvasLineJoin>();
  readonly miterLimit = input<number>();
  readonly width = input<number>();

  readonly instance: Stroke;

  private readonly styleHost = inject(StyleComponent, { optional: true });

  private readonly circleHost = inject(StyleCircleComponent, { optional: true });

  private readonly textHost = inject(StyleTextComponent, { optional: true });

  private readonly host: StyleComponent | StyleCircleComponent | StyleTextComponent;

  constructor() {
    this.host =
      this.textHost ??
      this.circleHost ??
      this.styleHost ??
      (() => {
        throw new Error('aol-style-stroke must be a descendant of aol-style, aol-style-circle, or aol-style-text.');
      })();

    this.instance = new Stroke({
      color: this.color(),
      lineCap: this.lineCap(),
      lineDash: this.lineDash(),
      lineJoin: this.lineJoin(),
      miterLimit: this.miterLimit(),
      width: this.width(),
    });

    if (this.host instanceof StyleComponent || this.host instanceof StyleTextComponent) {
      this.host.instance?.setStroke(this.instance);
    } else {
      this.host.setStroke(this.instance);
    }

    effect(() => {
      const color = this.color();
      const lineCap = this.lineCap();
      const lineDash = this.lineDash();
      const lineJoin = this.lineJoin();
      const miterLimit = this.miterLimit();
      const width = this.width();

      if (color !== undefined) {
        this.instance.setColor(color);
      }

      if (lineCap !== undefined) {
        this.instance.setLineCap(lineCap);
      }

      if (lineDash !== undefined) {
        this.instance.setLineDash(lineDash);
      }

      if (lineJoin !== undefined) {
        this.instance.setLineJoin(lineJoin);
      }

      if (miterLimit !== undefined) {
        this.instance.setMiterLimit(miterLimit);
      }

      if (width !== undefined) {
        this.instance.setWidth(width);
      }

      if (this.host instanceof StyleComponent || this.host instanceof StyleCircleComponent) {
        this.host.update();
      }
    });
  }
}
