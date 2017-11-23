import {
  Component, OnDestroy, OnInit, Inject, Input, Optional, OnChanges,
  SimpleChanges
} from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-layer-vector',
  template: `<ng-content></ng-content>`
})
export class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
  public source: ol.source.Vector;

  @Input() renderBuffer: number;

  constructor(@Inject(MapSystemToken) protected mapSystem: any,
              map: MapComponent,
              @Optional() group?: LayerGroupComponent) {
    super(mapSystem, group || map);
  }

  ngOnInit() {
    // console.log('creating ol.layer.Vector instance with:', this);
    this.instance = new this.mapSystem.layer.Vector(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
