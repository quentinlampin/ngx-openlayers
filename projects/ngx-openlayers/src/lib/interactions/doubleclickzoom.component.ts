import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { DoubleClickZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-doubleclickzoom',
  template: '',
  standalone: true,
})
export class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  duration = input<number>();
  delta = input<number>();

  instance?: DoubleClickZoom;

  ngOnInit(): void {
    this.instance = new DoubleClickZoom({
      duration: this.duration(),
      delta: this.delta(),
    });

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
