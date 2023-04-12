import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-rotate',
  template: ` <ng-content></ng-content> `,
})
export class ControlRotateComponent implements OnInit, OnDestroy {
  @Input()
  className: string;
  @Input()
  label: string;
  @Input()
  tipLabel: string;
  @Input()
  duration: number;
  @Input()
  autoHide: boolean;

  instance: Rotate;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-rotate');
  }

  ngOnInit() {
    this.instance = new Rotate(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-rotate');
    this.map.instance.removeControl(this.instance);
  }
}
