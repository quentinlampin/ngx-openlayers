import { Component, OnDestroy, OnInit, Input, Inject } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-control-defaults',
  template: ''
})
export class DefaultControlComponent implements OnInit, OnDestroy {
  instance: ol.Collection<ol.control.Control>;
  @Input() attribution: boolean;
  @Input() attributionOptions: olx.control.AttributionOptions;
  @Input() rotate: boolean;
  @Input() rotateOptions: olx.control.RotateOptions;
  @Input() zoom: boolean;
  @Input() zoomOptions: olx.control.ZoomOptions;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    // console.log('ol.control.defaults init: ', this);
    this.instance = this.mapSystem.control.defaults(this);
    this.instance.forEach((control) => this.map.instance.addControl(control));
  }

  ngOnDestroy() {
    // console.log('removing aol-control-defaults');
    this.instance.forEach((control) => this.map.instance.removeControl(control));
  }
}
