import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-control-zoomtoextent',
  template: `<ng-content></ng-content>`
})
export class ControlZoomToExtentComponent implements OnInit, OnDestroy {
  instance: ol.control.ZoomToExtent;

  @Input() className: string;
  @Input() label: (string | Node);
  @Input() tipLabel: string;
  @Input() extent: ol.Extent;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
    // console.log('instancing aol-control-zoomtoextent');
  }

  ngOnInit() {
    this.instance = new this.mapSystem.control.ZoomToExtent(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-zoomtoextent');
    this.map.instance.removeControl(this.instance);
  }
}
