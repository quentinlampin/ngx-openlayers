import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoom',
  template: `
    <ng-content></ng-content>
  `,
})
export class ControlZoomComponent implements OnInit, OnDestroy {
  instance: Zoom;

  @Input()
  duration: number;
  @Input()
  zoomInLabel: string | Node;
  @Input()
  zoomOutLabel: string | Node;
  @Input()
  zoomInTipLabel: string;
  @Input()
  zoomOutTipLabel: string;
  @Input()
  delta: number;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-zoom');
  }

  ngOnInit() {
    this.instance = new Zoom(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoom');
    this.map.instance.removeControl(this.instance);
  }
}
