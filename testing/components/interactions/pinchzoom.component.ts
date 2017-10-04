import {Component, Input} from '@angular/core';
import {interaction} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-interaction-pinchzoom',
  template: ''
})
export class PinchZoomInteractionComponent{
  instance: interaction.PinchZoom;

  @Input() duration: number;
  @Input() constrainResolution: boolean;

  constructor(private map: MapComponent) {
  }
}
