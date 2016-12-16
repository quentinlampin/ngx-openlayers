import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './../map.component';


@Component({
  selector: 'aol-control-attribution',
  template: `<ng-content></ng-content>`
})
export class ControlAttributionComponent extends control.Attribution implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-control-attribution');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy(){
    console.log('removing aol-control-attribution');
    this._host_.instance.removeControl(this);
  }
}
