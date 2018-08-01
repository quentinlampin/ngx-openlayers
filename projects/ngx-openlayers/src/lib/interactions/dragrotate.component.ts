import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { interaction, EventsConditionType } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragrotate',
  template: '',
})
export class DragRotateInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.DragRotate;

  @Input()
  condition: EventsConditionType;
  @Input()
  duration: number;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.DragRotate(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
