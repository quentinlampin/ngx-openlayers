import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { layer, source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-vector',
  template: `<ng-content></ng-content>`
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy {
  public source: source.Vector;

  @Input() renderBuffer: number;

  constructor(map: MapComponent) {
    super(map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new layer.Vector(this);
    super.ngOnInit();
  }
}
