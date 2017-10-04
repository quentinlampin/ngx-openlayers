import {Component, Input} from '@angular/core';
import {source} from 'openlayers';
import {MapComponent} from '../map.component';
import {LayerComponent} from './layer.component';

@Component({
  selector: 'aol-layer-vector',
  template: `<ng-content></ng-content>`
})
export class LayerVectorComponent extends LayerComponent {
  public source: source.Vector;

  @Input() renderBuffer: number;

  constructor(map: MapComponent) {
    super(map);
  }
}
