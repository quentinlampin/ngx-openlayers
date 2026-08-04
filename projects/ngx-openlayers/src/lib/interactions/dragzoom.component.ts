import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragzoom',
  template: '',
  standalone: true,
})
export class DragZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  className = input<string>();
  condition = input<Condition>();
  duration = input<number>();
  out = input<boolean>();

  instance?: DragZoom;

  ngOnInit(): void {
    this.instance = new DragZoom({
      className: this.className(),
      condition: this.condition(),
      duration: this.duration(),
      out: this.out(),
    });

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
