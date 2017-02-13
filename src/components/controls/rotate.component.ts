import { Component, Host, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-rotate',
  template: `<ng-content></ng-content>`
})
export class ControlRotateComponent extends control.Rotate implements OnInit, OnDestroy {

  constructor(@Host() private map: MapComponent) {
    // console.log('instancing aol-control-rotate');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-rotate');
    this.map.instance.removeControl(this);
  }
}
