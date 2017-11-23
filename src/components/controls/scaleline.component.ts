import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-control-scaleline',
  template: `<ng-content></ng-content>`
})
export class ControlScaleLineComponent implements OnInit, OnDestroy {
  instance: ol.control.ScaleLine;
  @Input() units: string;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
    // console.log('instancing aol-control-scaleline');
  }

  ngOnInit() {
    this.instance = new this.mapSystem.control.ScaleLine(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-scaleline');
    this.map.instance.removeControl(this.instance);
  }
}
