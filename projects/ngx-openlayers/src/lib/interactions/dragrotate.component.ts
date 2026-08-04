import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragRotate } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragrotate',
  template: '',
  standalone: true,
})
export class DragRotateInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  condition = input<Condition>();
  duration = input<number>();

  instance?: DragRotate;

  ngOnInit(): void {
    this.instance = new DragRotate({
      condition: this.condition(),
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
