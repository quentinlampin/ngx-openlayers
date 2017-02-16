import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { control, Collection } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-defaults',
  template: ''
})
export class DefaultControlComponent implements OnInit, OnDestroy {
  instance: Collection<control.Control>;
  @Input() attribution: boolean;
  @Input() attributionOptions: olx.control.AttributionOptions;
  @Input() rotate: boolean;
  @Input() rotateOptions: olx.control.RotateOptions;
  @Input() zoom: boolean;
  @Input() zoomOptions: olx.control.ZoomOptions;

  constructor(private map: MapComponent) {
  }

  ngOnInit() {
    // console.log('ol.control.defaults init: ', this);
    this.instance = control.defaults(this);
    this.instance.forEach((control) => this.map.instance.addControl(control));
  }

  ngOnDestroy() {
    // console.log('removing aol-control-defaults');
    this.instance.forEach((control) => this.map.instance.removeControl(control));
  }
}
