import { Component, OnInit, Input, Optional, SimpleChanges, OnChanges } from '@angular/core';
import VectorTile, { Options as VectorTileOptions } from 'ol/layer/VectorTile';
import RenderType from 'ol/layer/VectorTileRenderType';
import { Feature } from 'ol';
import { Style } from 'ol/style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { StyleFunction } from 'ol/style/Style';

@Component({
  selector: 'aol-layer-vectortile',
  template: `
    <ng-content></ng-content>
  `,
})
export class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges, VectorTileOptions {
  @Input()
  renderBuffer: number;
  @Input()
  renderMode: RenderType | string;
  /* not marked as optional in the typings */
  @Input()
  renderOrder: (feature1: Feature, feature2: Feature) => number;
  @Input()
  style: Style | Style[] | StyleFunction;
  @Input()
  updateWhileAnimating: boolean;
  @Input()
  updateWhileInteracting: boolean;
  @Input()
  visible: boolean;

  constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.VectorTile instance with:', this);
    this.instance = new VectorTile(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
