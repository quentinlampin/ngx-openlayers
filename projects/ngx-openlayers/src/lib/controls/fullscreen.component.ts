import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-fullscreen',
  template: ` <ng-content></ng-content> `,
})
export class ControlFullScreenComponent implements OnInit, OnDestroy {
  @Input()
  className: string;
  @Input()
  label: string;
  @Input()
  labelActive: string;
  @Input()
  tipLabel: string;
  @Input()
  keys: boolean;

  instance: FullScreen;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-fullscreen');
  }

  ngOnInit() {
    this.instance = new FullScreen(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-fullscreen');
    this.map.instance.removeControl(this.instance);
  }
}
