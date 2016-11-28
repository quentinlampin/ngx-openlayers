import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './../map.component';


@Component({
  selector: 'aol-control-overviewmap',
  template: `<ng-content></ng-content>`
})
export class ControlOverviewMapComponent extends control.OverviewMap implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-control-overviewmap');
    super();
    this._host_ = map;
    map.addControl(this);
  }

  ngOnDestroy(){
    console.log('removing aol-control-overviewmap');
    this._host_.removeControl(this);
  }
}
