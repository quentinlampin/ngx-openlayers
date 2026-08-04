import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-mousewheelzoom',
  template: '',
  standalone: true,
})
export class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  duration = input<number>();
  timeout = input<number>();
  useAnchor = input<boolean>();

  instance?: MouseWheelZoom;

  ngOnInit(): void {
    this.instance = new MouseWheelZoom({
      duration: this.duration(),
      timeout: this.timeout(),
      useAnchor: this.useAnchor(),
    });

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
