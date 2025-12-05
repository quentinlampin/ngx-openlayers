import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { Vector } from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { OrderFunction } from 'ol/render';
import { BackgroundColor } from 'ol/layer/Base';

@Component({
  selector: 'aol-layer-vector',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
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

  constructor() {
    const map = inject(MapComponent);
    const group = inject(LayerGroupComponent, { optional: true });

    super(group || map);
  }

  ngOnInit(): void {
    // console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new Vector(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }
}
