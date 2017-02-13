import { Component, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoom',
  template: `<ng-content></ng-content>`
})
export class ControlZoomComponent extends control.Zoom implements OnInit, OnDestroy {

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-zoom');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoom');
    this.map.instance.removeControl(this);
  }
}
