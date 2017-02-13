import { Component, Host, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-overviewmap',
  template: `<ng-content></ng-content>`
})
export class ControlOverviewMapComponent extends control.OverviewMap implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-overviewmap');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-overviewmap');
    this.map.instance.removeControl(this);
  }
}
