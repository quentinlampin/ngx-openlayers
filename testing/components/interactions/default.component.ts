import {Component} from '@angular/core';
import {Collection, interaction} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-default',
  template: ''
})
export class DefaultInteractionComponent {
  instance: Collection<interaction.Interaction>;

  constructor(private map: MapComponent) {
  }
}
