import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './../map.component';


@Component({
  selector: 'aol-control-rotate',
  template: `<ng-content></ng-content>`
})
export class ControlRotateComponent extends control.Rotate implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-control-rotate');
    super();
    this._host_ = map;
    map.addControl(this);
  }

  ngOnDestroy(){
    console.log('removing aol-control-rotate');
    this._host_.removeControl(this);
  }
}
