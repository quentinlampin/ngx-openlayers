import {Component, Input} from '@angular/core';
import {EventsConditionType, interaction, Kinetic} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-dragpan',
  template: ''
})
export class DragPanInteractionComponent {
  instance: interaction.DragPan;

  @Input() condition: EventsConditionType;
  @Input() kinetic: Kinetic;

  constructor(private map: MapComponent) {
  }
}
