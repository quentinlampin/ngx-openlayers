import { Component, OnInit, Inject, Input, Optional, SimpleChanges, OnChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-layer-vectortile',
  template: `<ng-content></ng-content>`
})
export class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges {

  @Input() renderBuffer: number;
  @Input() renderMode: ol.layer.VectorTileRenderType|string;
  /* not marked as optional in the typings */
  @Input() renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number;
  @Input() style: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
  @Input() updateWhileAnimating: boolean;
  @Input() updateWhileInteracting: boolean;
  @Input() visible: boolean;

  constructor(@Inject(MapSystemToken) protected mapSystem: any,
              map: MapComponent,
              @Optional() group?: LayerGroupComponent) {
    super(mapSystem, group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.VectorTile instance with:', this);
    this.instance = new this.mapSystem.layer.VectorTile(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
