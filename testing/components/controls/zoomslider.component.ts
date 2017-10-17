import {Component} from '@angular/core';
import {control} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-control-zoomslider',
  template: `<ng-content></ng-content>`
})
export class ControlZoomSliderComponent {
  instance: control.ZoomSlider;

  constructor(private map: MapComponent) {}
}
