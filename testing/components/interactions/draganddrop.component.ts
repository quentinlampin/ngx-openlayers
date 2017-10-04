import {Component, Input} from '@angular/core';
import {format, interaction, ProjectionLike} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-draganddrop',
  template: ''
})
export class DragAndDropInteractionComponent {
  instance: interaction.DragAndDrop;

  @Input() formatConstructors: ((n: format.Feature) => any)[];
  @Input() projection: ProjectionLike;
  @Input() target: Element;

  constructor(private map: MapComponent) {
  }
}
