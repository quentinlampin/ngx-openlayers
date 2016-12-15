import { Component, Host, Input, OnChanges, OnDestroy } from '@angular/core';
import { View } from 'openlayers';
import { MapComponent } from "./map.component";

@Component({
  selector: 'aol-view',
  template: `<ng-content></ng-content>`
})
export class ViewComponent implements OnChanges, OnDestroy{
  private _host_: MapComponent;

  public instance: View;

  @Input('zoom') zoom: number;
  @Input('center') center: [number, number];

  constructor(@Host() map: MapComponent){
    console.log('instancing aol-view');

    this.instance = new View(this);
    this._host_ = map;
    this._host_.instance.setView(this.instance);
  }

  ngOnChanges(){
    this.instance.setZoom(this.zoom);
  }

  ngOnDestroy(){
    console.log('removing aol-view');
  }
}
