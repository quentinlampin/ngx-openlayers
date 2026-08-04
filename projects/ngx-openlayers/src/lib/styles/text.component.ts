import { Component, effect, inject, input } from '@angular/core';

import { Text } from 'ol/style';

import { StyleComponent } from './style.component';

@Component({
  selector: 'aol-style-text',
  standalone: true,
  template: `<div class="aol-style-text"></div>`,
})
export class StyleTextComponent {
  private readonly host = inject(StyleComponent, { host: true });

  readonly font = input<string>();
  readonly offsetX = input<number>();
  readonly offsetY = input<number>();
  readonly scale = input<number>();
  readonly rotateWithView = input<boolean>();
  readonly rotation = input<number>();
  readonly text = input<string>();
  readonly textAlign = input<CanvasTextAlign>();
  readonly textBaseline = input<CanvasTextBaseline>();

  readonly componentType = 'style-text';

  readonly instance: Text;

  constructor() {
    this.instance = new Text({
      font: this.font(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      scale: this.scale(),
      rotateWithView: this.rotateWithView(),
      rotation: this.rotation(),
      text: this.text(),
      textAlign: this.textAlign(),
      textBaseline: this.textBaseline(),
    });

    this.host.instance?.setText(this.instance);

    effect(() => {
      this.instance.setFont(this.font());
      this.instance.setOffsetX(this.offsetX() ?? 0);
      this.instance.setOffsetY(this.offsetY() ?? 0);
      this.instance.setScale(this.scale() ?? 1);
      this.instance.setRotateWithView(this.rotateWithView() ?? false);
      this.instance.setRotation(this.rotation() ?? 0);
      this.instance.setText(this.text() ?? '');
      this.instance.setTextAlign(this.textAlign());
      this.instance.setTextBaseline(this.textBaseline());

      this.host.update();
    });
  }

  setFill(fill: import('ol/style').Fill): void {
    this.instance.setFill(fill);
    this.host.update();
  }

  setStroke(stroke: import('ol/style').Stroke): void {
    this.instance.setStroke(stroke);
    this.host.update();
  }
}
