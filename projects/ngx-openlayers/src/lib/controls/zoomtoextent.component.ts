import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { control, Extent } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoomtoextent',
  template: `<ng-content></ng-content>`,
})
export class ControlZoomToExtentComponent implements OnInit, OnDestroy {
  instance: control.ZoomToExtent;

  @Input()
  className: string;
  @Input()
  label: string | Node;
  @Input()
  tipLabel: string;
  @Input()
  extent: Extent;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-zoomtoextent');
  }

  ngOnInit() {
    this.instance = new control.ZoomToExtent(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomtoextent');
    this.map.instance.removeControl(this.instance);
  }
}
