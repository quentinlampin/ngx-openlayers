import {Component, Input} from '@angular/core';
import {interaction} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-doubleclickzoom',
  template: ''
})
export class DoubleClickZoomInteractionComponent {
  instance: interaction.DoubleClickZoom;

  @Input() duration: number;
  @Input() delta: number;

  constructor(private map: MapComponent) {
  }
}
