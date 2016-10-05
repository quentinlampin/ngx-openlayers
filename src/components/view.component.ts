import { Component, Host, Input, OnChanges, OnDestroy } from '@angular/core';
import { View } from 'openlayers';
import {MapComponent} from "./map.component";

@Component({
  selector: 'aol-view',
  template: `<ng-content></ng-content>`
})
export class ViewComponent extends View implements OnChanges, OnDestroy{
  _host_: MapComponent;

  @Input('zoom') zoom: number;

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-view');
    super({center: [0,0], zoom:1});
    this._host_ = map;
    this._host_.setView(this);
  }

  ngOnChanges(){
    this.setZoom(this.zoom);
  }

  ngOnDestroy(){
    console.log('removing aol-view');
    // this._host_.setView(null);
  }
}