import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ZoomToExtent } from 'ol/control';
import { MapComponent } from '../map.component';
import { Extent } from 'ol/extent';

@Component({
  selector: 'aol-control-zoomtoextent',
  template: ` <ng-content></ng-content> `,
})
export class ControlZoomToExtentComponent implements OnInit, OnDestroy {
  instance: ZoomToExtent;

  @Input()
  className: string;
  @Input()
  label: string | HTMLElement;
  @Input()
  tipLabel: string;
  @Input()
  extent: Extent;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-zoomtoextent');
  }

  ngOnInit() {
    this.instance = new ZoomToExtent(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomtoextent');
    this.map.instance.removeControl(this.instance);
  }
}
