import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
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

  @Input()
  condition: Condition;
  @Input()
  kinetic: Kinetic;

  instance: DragPan;

  ngOnInit(): void {
    this.instance = new DragPan(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
