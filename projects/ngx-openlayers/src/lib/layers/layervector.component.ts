import { Component, OnDestroy, OnInit, Input, Optional, OnChanges, SimpleChanges } from '@angular/core';
import { layer, source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'aol-layer-vector',
  template: `<ng-content></ng-content>`,
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
  public source: source.Vector;

  @Input()
  renderBuffer: number;

  constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new layer.Vector(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
