import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoomslider',
  template: `<ng-content></ng-content>`,
})
export class ControlZoomSliderComponent implements OnInit, OnDestroy {
  instance: control.ZoomSlider;

  @Input()
  className: string;
  @Input()
  duration: number;
  @Input()
  maxResolution: number;
  @Input()
  minResolution: number;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-zoomslider');
  }

  ngOnInit() {
    this.instance = new control.ZoomSlider(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomslider');
    this.map.instance.removeControl(this.instance);
  }
}
