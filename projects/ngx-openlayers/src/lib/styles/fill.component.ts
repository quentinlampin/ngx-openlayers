import { Component, effect, inject, input } from '@angular/core';

import { Color } from 'ol/color';
import { ColorLike, PatternDescriptor } from 'ol/colorlike';
import { Fill } from 'ol/style';

import { StyleCircleComponent } from './circle.component';
import { StyleComponent } from './style.component';
import { StyleTextComponent } from './text.component';

@Component({
  selector: 'aol-style-fill',
  standalone: true,
  template: `<div class="aol-style-fill"></div>`,
})
export class StyleFillComponent {
  readonly color = input<Color | ColorLike | PatternDescriptor | null>();

  readonly instance: Fill;

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
        throw new Error('aol-style-fill must be a descendant of aol-style, aol-style-circle, or aol-style-text.');
      })();

    this.instance = new Fill({
      color: this.color() ?? undefined,
    });

    if (this.host instanceof StyleComponent || this.host instanceof StyleTextComponent) {
      this.host.instance?.setFill(this.instance);
    } else {
      this.host.setFill(this.instance);
    }

    effect(() => {
      const color = this.color();

      if (color !== undefined) {
        this.instance.setColor(color);
      }

      if (this.host instanceof StyleComponent || this.host instanceof StyleCircleComponent) {
        this.host.update();
      }
    });
  }
}
