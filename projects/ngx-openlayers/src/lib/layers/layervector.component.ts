import { Component, Input, OnInit } from '@angular/core';
import { Vector } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { LayerComponent } from './layer.component';
import { OrderFunction } from 'ol/render';
import { BackgroundColor } from 'ol/layer/Base';

@Component({
  selector: 'aol-layer-vector',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerVectorComponent extends LayerComponent implements OnInit {
  @Input()
  renderBuffer: number;
  @Input()
  style: Style | Style[] | StyleFunction;
  @Input()
  updateWhileAnimating: boolean;
  @Input()
  updateWhileInteracting: boolean;
  @Input()
  renderOrder: OrderFunction;
  @Input()
  declutter: string | number | boolean;
  @Input()
  background: BackgroundColor;

  source: VectorSource;

  ngOnInit(): void {
    this.instance = new Vector(this);
    super.ngOnInit();
  }
}
