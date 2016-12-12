import { Component, Host, OnDestroy } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from './../map.component';


@Component({
  selector: 'aol-control-mouseposition',
  template: `<ng-content></ng-content>`
})
export class ControlMousePositionComponent extends control.MousePosition implements OnDestroy{
  _host_: MapComponent;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-control-mouseposition');
    super();
    this._host_ = map;
    map.instance.addControl(this);
  }

  ngOnDestroy(){
    console.log('removing aol-control-mouseposition');
    this._host_.instance.removeControl(this);
  }
}
