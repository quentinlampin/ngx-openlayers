import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import Kinetic from 'ol/Kinetic';
import { Condition } from 'ol/events/condition';
import { DragPan } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragpan',
  template: '',
  standalone: true,
})
export class DragPanInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  condition = input<Condition>();
  kinetic = input<Kinetic>();

  instance?: DragPan;

  ngOnInit(): void {
    this.instance = new DragPan({
      condition: this.condition(),
      kinetic: this.kinetic(),
    });

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
