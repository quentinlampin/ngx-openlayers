import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './../map.component';


@Component({
  selector: 'aol-control-zoomslider',
  template: `<ng-content></ng-content>`
})
export class ControlZoomSliderComponent extends control.ZoomSlider implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-control-zoomslider');
    super();
    this._host_ = map;
    map.addControl(this);
  }

  ngOnDestroy(){
    console.log('removing aol-control-zoomslider');
    this._host_.removeControl(this);
  }
}
