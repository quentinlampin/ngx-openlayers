import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { PinchZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-pinchzoom',
  template: '',
  standalone: true,
})
export class PinchZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  duration: number;
  @Input()
  constrainResolution: boolean;

  instance: PinchZoom;

  ngOnInit(): void {
    this.instance = new PinchZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
