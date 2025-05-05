import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  @Input()
  condition: Condition;
  @Input()
  kinetic: Kinetic;

  instance: DragPan;

  constructor(private map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new DragPan(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
