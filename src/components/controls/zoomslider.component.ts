import { Component, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoomslider',
  template: `<ng-content></ng-content>`
})
export class ControlZoomSliderComponent extends control.ZoomSlider implements OnInit, OnDestroy {

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-zoomslider');
    super();
  }

  ngOnInit() {
    this.map.instance.addControl(this);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomslider');
    this.map.instance.removeControl(this);
  }
}
