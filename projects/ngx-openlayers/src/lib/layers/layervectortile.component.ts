import { Component, input, OnInit } from '@angular/core';
import { VectorTile } from 'ol/layer';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { OrderFunction } from 'ol/render';
import { BackgroundColor } from 'ol/layer/Base';
import { VectorTileRenderType } from 'ol/layer/VectorTile';

import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-vectortile',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerVectorTileComponent extends LayerComponent implements OnInit {
  renderOrder = input<OrderFunction>();
  renderBuffer = input<number>();
  renderMode = input<VectorTileRenderType>();
  style = input<Style | Style[] | StyleFunction>();
  updateWhileAnimating = input<boolean>();
  updateWhileInteracting = input<boolean>();
  declutter = input<string | number | boolean>();
  background = input<BackgroundColor>();
  preload = input<number>();
  useInterimTilesOnError = input<boolean>();
  cacheSize = input<number>();

  ngOnInit(): void {
    this.instance = new VectorTile({
      opacity: this.opacity(),
      visible: this.visible(),
      extent: this.extent(),
      zIndex: this.zIndex(),
      minResolution: this.minResolution(),
      maxResolution: this.maxResolution(),
      minZoom: this.minZoom(),
      maxZoom: this.maxZoom(),

      renderOrder: this.renderOrder(),
      renderBuffer: this.renderBuffer(),
      renderMode: this.renderMode(),
      style: this.style(),
      updateWhileAnimating: this.updateWhileAnimating(),
      updateWhileInteracting: this.updateWhileInteracting(),
      declutter: this.declutter(),
      background: this.background(),

      preload: this.preload(),
      useInterimTilesOnError: this.useInterimTilesOnError(),

      properties: this.properties(),
    });

    super.ngOnInit();
  }
}
