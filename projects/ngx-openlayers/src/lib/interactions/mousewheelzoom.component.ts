import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
    selector: 'aol-interaction-mousewheelzoom',
    template: '',
    standalone: true,
})
export class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
  @Input()
  duration: number;
  @Input()
  timeout: number;
  @Input()
  useAnchor: boolean;

  instance: MouseWheelZoom;

  constructor(private map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new MouseWheelZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
