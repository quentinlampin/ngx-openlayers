import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ScaleLine } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-scaleline',
  template: ` <ng-content></ng-content> `,
})
export class ControlScaleLineComponent implements OnInit, OnDestroy {
  instance: ScaleLine;
  @Input()
  units: string;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-scaleline');
  }

  ngOnInit() {
    this.instance = new ScaleLine(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-scaleline');
    this.map.instance.removeControl(this.instance);
  }
}
