import { Component, Input, OnDestroy, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { DoubleClickZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-doubleclickzoom',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  duration: number;
  @Input()
  delta: number;

  instance?: DoubleClickZoom;

  ngOnInit(): void {
    this.instance = new DoubleClickZoom(this);
    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
