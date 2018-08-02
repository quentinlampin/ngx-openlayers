import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { interaction, EventsConditionType, Kinetic } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragpan',
  template: '',
})
export class DragPanInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.DragPan;

  @Input()
  condition: EventsConditionType;
  @Input()
  kinetic: Kinetic;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.DragPan(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
