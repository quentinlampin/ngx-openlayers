import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './../map.component';


@Component({
  selector: 'aol-control-zoom',
  template: `<ng-content></ng-content>`
})
export class ControlZoomComponent extends control.Zoom implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-control-zoom');
    super();
    this._host_ = map;
    map.addControl(this);
  }

  ngOnDestroy(){
    console.log('removing aol-control-zoom');
    this._host_.removeControl(this);
  }
}
