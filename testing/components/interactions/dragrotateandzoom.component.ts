import {Component, Input} from '@angular/core';
import {EventsConditionType, interaction} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-dragrotateandzoom',
  template: ''
})
export class DragRotateAndZoomInteractionComponent {
  instance: interaction.DragRotate;

  @Input() condition: EventsConditionType;
  @Input() duration: number;

  constructor(private map: MapComponent) {
  }
}
