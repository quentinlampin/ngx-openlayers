import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-control-zoom',
  template: `<ng-content></ng-content>`
})
export class ControlZoomComponent implements OnInit, OnDestroy {
  instance: ol.control.Zoom;

  @Input() duration: number;
  @Input() zoomInLabel: (string | Node);
  @Input() zoomOutLabel: (string | Node);
  @Input() zoomInTipLabel: string;
  @Input() zoomOutTipLabel: string;
  @Input() delta: number;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
    // console.log('instancing aol-control-zoom');
  }

  ngOnInit() {
    this.instance = new this.mapSystem.control.Zoom(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoom');
    this.map.instance.removeControl(this.instance);
  }
}
