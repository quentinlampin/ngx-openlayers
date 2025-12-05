import { Component, Input } from '@angular/core';
import { VectorTile } from 'ol/layer';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { LayerComponent } from './layer.component';
import { VectorTileRenderType } from 'ol/layer/VectorTile';
import { OrderFunction } from 'ol/render';
import { BackgroundColor } from 'ol/layer/Base';

@Component({
  selector: 'aol-layer-vectortile',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerVectorTileComponent extends LayerComponent {
  @Input()
  renderOrder: OrderFunction;
  @Input()
  renderBuffer: number;
  @Input()
  renderMode: VectorTileRenderType;
  @Input()
  style: Style | Style[] | StyleFunction;
  @Input()
  updateWhileAnimating: boolean;
  @Input()
  updateWhileInteracting: boolean;
  @Input()
  declutter: string | number | boolean;
  @Input()
  background: BackgroundColor;
  @Input()
  preload: number;
  @Input()
  useInterimTilesOnError: boolean;
  @Input()
  cacheSize: number;

  instance = new VectorTile(this);
}
