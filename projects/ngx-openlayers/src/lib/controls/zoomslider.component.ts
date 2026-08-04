import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoomslider',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlZoomSliderComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  className = input<string>();
  duration = input<number>();
  target = input<HTMLElement | string>();

  instance?: ZoomSlider;

  ngOnInit(): void {
    this.instance = new ZoomSlider({
      className: this.className(),
      duration: this.duration(),
      target: this.target(),
    });

    this.map.instance?.addControl(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeControl(this.instance);
    }
  }
}
