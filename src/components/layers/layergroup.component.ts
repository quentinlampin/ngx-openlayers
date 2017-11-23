import { Component, OnDestroy, OnInit, SkipSelf, Inject, Optional } from '@angular/core';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-layer-group',
  template: `<ng-content></ng-content>`
})
export class LayerGroupComponent extends LayerComponent implements OnInit, OnDestroy {
  public instance: ol.layer.Group;

  constructor(@Inject(MapSystemToken) protected mapSystem: any,
              map: MapComponent,
              @SkipSelf() @Optional() group?: LayerGroupComponent) {
    super(mapSystem, group || map);
  }

  ngOnInit() {
    // console.log(`creating ol.layer.Group instance with:`, this);
    this.instance = new this.mapSystem.layer.Group(this);
    super.ngOnInit();
  }
}
