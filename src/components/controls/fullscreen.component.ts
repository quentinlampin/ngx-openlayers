import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './../map.component';


@Component({
  selector: 'aol-control-fullscreen',
  template: `<ng-content></ng-content>`
})
export class ControlFullScreenComponent extends control.FullScreen implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-control-fullscreen');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy(){
    console.log('removing aol-control-fullscreen');
    this._host_.instance.removeControl(this);
  }
}
