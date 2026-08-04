import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoom',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlZoomComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  duration = input<number>();
  zoomInLabel = input<string | HTMLElement>();
  zoomOutLabel = input<string | HTMLElement>();
  zoomInTipLabel = input<string>();
  zoomOutTipLabel = input<string>();
  delta = input<number>();

  instance?: Zoom;

  ngOnInit(): void {
    this.instance = new Zoom({
      duration: this.duration(),
      zoomInLabel: this.zoomInLabel(),
      zoomOutLabel: this.zoomOutLabel(),
      zoomInTipLabel: this.zoomInTipLabel(),
      zoomOutTipLabel: this.zoomOutTipLabel(),
      delta: this.delta(),
    });

    this.map.instance?.addControl(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeControl(this.instance);
    }
  }
}
