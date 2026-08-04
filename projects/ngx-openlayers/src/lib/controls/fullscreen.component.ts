import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-fullscreen',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlFullScreenComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  className = input<string>();
  label = input<string>();
  labelActive = input<string>();
  tipLabel = input<string>();
  keys = input<boolean>();

  instance?: FullScreen;

  ngOnInit(): void {
    this.instance = new FullScreen({
      className: this.className(),
      label: this.label(),
      labelActive: this.labelActive(),
      tipLabel: this.tipLabel(),
      keys: this.keys(),
    });
    this.map.instance?.addControl(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      // console.log('removing aol-control-fullscreen');
      this.map.instance?.removeControl(this.instance);
    }
  }
}
