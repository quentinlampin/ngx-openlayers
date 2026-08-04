import { Component, effect, inject, input } from '@angular/core';

import { Geometry } from 'ol/geom';
import { Fill, Image, Stroke, Style, Text } from 'ol/style';
import { GeometryFunction } from 'ol/style/Style';

import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';

@Component({
  selector: 'aol-style',
  standalone: true,
  template: `<ng-content />`,
})
export class StyleComponent {
  readonly geometry = input<string | Geometry | GeometryFunction>();
  readonly fill = input<Fill>();
  readonly image = input<Image>();
  readonly stroke = input<Stroke>();
  readonly text = input<Text>();
  readonly zIndex = input<number>();

  readonly componentType = 'style';

  readonly instance: Style;

  private readonly host: FeatureComponent | LayerVectorComponent;

  private readonly featureHost = inject(FeatureComponent, { optional: true });

  private readonly layerHost = inject(LayerVectorComponent, { optional: true });

  constructor() {
    this.host =
      this.featureHost ??
      this.layerHost ??
      (() => {
        throw new Error('aol-style must be applied to a feature or a vector layer.');
      })();

    this.instance = new Style({
      geometry: this.geometry(),
      fill: this.fill(),
      image: this.image(),
      stroke: this.stroke(),
      text: this.text(),
      zIndex: this.zIndex(),
    });

    this.host.instance?.setStyle(this.instance);

    effect(() => {
      const geometry = this.geometry();
      const fill = this.fill();
      const image = this.image();
      const stroke = this.stroke();
      const text = this.text();
      const zIndex = this.zIndex();

      if (geometry !== undefined) {
        this.instance.setGeometry(geometry);
      }

      if (fill !== undefined) {
        this.instance.setFill(fill);
      }

      if (image !== undefined) {
        this.instance.setImage(image);
      }

      if (stroke !== undefined) {
        this.instance.setStroke(stroke);
      }

      if (text !== undefined) {
        this.instance.setText(text);
      }

      if (zIndex !== undefined) {
        this.instance.setZIndex(zIndex);
      }

      this.update();
    });
  }

  update(): void {
    this.host.instance?.changed();
  }

  setFill(fill: Fill | null): void {
    this.instance.setFill(fill);
    this.update();
  }

  setStroke(stroke: Stroke | null): void {
    this.instance.setStroke(stroke);
    this.update();
  }

  setImage(image: Image): void {
    this.instance.setImage(image);
    this.update();
  }

  setText(text: Text): void {
    this.instance.setText(text);
    this.update();
  }
}
