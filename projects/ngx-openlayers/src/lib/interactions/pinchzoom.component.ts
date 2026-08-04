import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { PinchZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-pinchzoom',
  template: '',
  standalone: true,
})
export class PinchZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  duration = input<number>();

  instance?: PinchZoom;

  ngOnInit(): void {
    this.instance = new PinchZoom({
      duration: this.duration(),
    });

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
