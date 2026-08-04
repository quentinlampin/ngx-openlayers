import { Component, input, OnInit } from '@angular/core';
import { Vector } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { OrderFunction } from 'ol/render';
import { BackgroundColor } from 'ol/layer/Base';

import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-vector',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerVectorComponent extends LayerComponent implements OnInit {
  renderBuffer = input<number>();
  style = input<Style | Style[] | StyleFunction>();
  updateWhileAnimating = input<boolean>();
  updateWhileInteracting = input<boolean>();
  renderOrder = input<OrderFunction>();
  declutter = input<string | number | boolean>();
  background = input<BackgroundColor>();

  source!: VectorSource;

  ngOnInit(): void {
    this.instance = new Vector({
      opacity: this.opacity(),
      visible: this.visible(),
      extent: this.extent(),
      zIndex: this.zIndex(),
      minResolution: this.minResolution(),
      maxResolution: this.maxResolution(),
      minZoom: this.minZoom(),
      maxZoom: this.maxZoom(),

      renderBuffer: this.renderBuffer(),
      style: this.style(),
      updateWhileAnimating: this.updateWhileAnimating(),
      updateWhileInteracting: this.updateWhileInteracting(),
      renderOrder: this.renderOrder(),
      declutter: this.declutter(),
      background: this.background(),

      source: this.source,
      properties: this.properties(),
    });

    super.ngOnInit();
  }
}
