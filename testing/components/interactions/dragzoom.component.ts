import {Component, Input} from '@angular/core';
import {EventsConditionType, interaction} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-dragzoom',
  template: ''
})
export class DragZoomInteractionComponent {
  instance: interaction.DragZoom;

  @Input() className: string;
  @Input() condition: EventsConditionType;
  @Input() duration: number;
  @Input() out: boolean;

  constructor(private map: MapComponent) {
  }
}
