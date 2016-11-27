import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './../map.component';


@Component({
  selector: 'aol-control-zoomtoextent',
  template: `<ng-content></ng-content>`
})
export class ControlZoomToExtentComponent extends control.ZoomToExtent implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-control-zoomtoextent');
    super();
    this._host_ = map;
    map.addControl(this);
  }

  ngOnDestroy(){
    console.log('removing aol-control-zoomtoextent');
    this._host_.removeControl(this);
  }
}
