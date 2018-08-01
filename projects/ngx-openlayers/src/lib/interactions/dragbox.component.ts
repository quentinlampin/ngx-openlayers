import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { interaction, EventsConditionType, DragBoxEndConditionType } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragbox',
  template: '',
})
export class DragBoxInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.DragBox;

  @Input()
  className: string;
  @Input()
  condition: EventsConditionType;
  @Input()
  boxEndCondition: DragBoxEndConditionType;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.DragBox(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
