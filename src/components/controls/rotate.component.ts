import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-control-rotate',
  template: `<ng-content></ng-content>`
})
export class ControlRotateComponent implements OnInit, OnDestroy {
  instance: ol.control.Rotate;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
    // console.log('instancing aol-control-rotate');
  }

  ngOnInit() {
    this.instance = new this.mapSystem.control.Rotate(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-rotate');
    this.map.instance.removeControl(this.instance);
  }
}
