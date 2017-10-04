import {Component, Input} from '@angular/core';
import {DragBoxEndConditionType, EventsConditionType, interaction} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-dragbox',
  template: ''
})
export class DragBoxInteractionComponent {
  instance: interaction.DragBox;

  @Input() className: string;
  @Input() condition: EventsConditionType;
  @Input() boxEndCondition: DragBoxEndConditionType;

  constructor(private map: MapComponent) {
  }
}
