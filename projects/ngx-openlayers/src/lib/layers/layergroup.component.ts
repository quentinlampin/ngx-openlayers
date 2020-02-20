import { Component, OnDestroy, OnInit, SkipSelf, Optional } from '@angular/core';
import { Group } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-layer-group',
  template: ` <ng-content></ng-content> `,
})
export class LayerGroupComponent extends LayerComponent implements OnInit, OnDestroy {
  public instance: Group;

  constructor(
    map: MapComponent,
    @SkipSelf()
    @Optional()
    group?: LayerGroupComponent
  ) {
    super(group || map);
  }

  ngOnInit() {
    // console.log(`creating ol.layer.Group instance with:`, this);
    this.instance = new Group(this);
    super.ngOnInit();
  }
}
