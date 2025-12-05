import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-mousewheelzoom',
  template: '',
  standalone: true,
})
export class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  duration: number;
  @Input()
  timeout: number;
  @Input()
  useAnchor: boolean;

  instance: MouseWheelZoom;

  ngOnInit(): void {
    this.instance = new MouseWheelZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
