import { Component, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoomtoextent',
  template: `<ng-content></ng-content>`
})
export class ControlZoomToExtentComponent extends control.ZoomToExtent implements OnInit, OnDestroy {

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-zoomtoextent');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomtoextent');
    this.map.instance.removeControl(this);
  }
}
