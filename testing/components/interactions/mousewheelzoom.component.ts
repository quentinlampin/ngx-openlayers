import {Component, Input} from '@angular/core';
import {interaction} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-mousewheelzoom',
  template: ''
})
export class MouseWheelZoomInteractionComponent {
  instance: interaction.MouseWheelZoom;
  @Input() duration: number;
  @Input() timeout: number;
  @Input() useAnchor: boolean;

  constructor(private map: MapComponent) {
  }

}
