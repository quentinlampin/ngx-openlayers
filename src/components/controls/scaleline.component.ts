import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './../map.component';


@Component({
  selector: 'aol-control-scaleline',
  template: `<ng-content></ng-content>`
})
export class ControlScaleLineComponent extends control.ScaleLine implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-control-scaleline');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy(){
    console.log('removing aol-control-scaleline');
    this._host_.instance.removeControl(this);
  }
}
