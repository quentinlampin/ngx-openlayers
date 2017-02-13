import { Component, Host, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-fullscreen',
  template: `<ng-content></ng-content>`
})
export class ControlFullScreenComponent extends control.FullScreen implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-fullscreen');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-fullscreen');
    this.map.instance.removeControl(this);
  }
}
