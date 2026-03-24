import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { PinchZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-pinchzoom',
  template: '',
  standalone: true,
})
export class PinchZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent, { host: true });

  @Input()
  duration: number;
  @Input()
  constrainResolution: boolean;

  instance?: PinchZoom;

  ngOnInit(): void {
    this.instance = new PinchZoom(this);
    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
