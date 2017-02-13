import { Component, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-scaleline',
  template: `<ng-content></ng-content>`
})
export class ControlScaleLineComponent extends control.ScaleLine implements OnInit, OnDestroy {

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-scaleline');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-scaleline');
    this.map.instance.removeControl(this);
  }
}
