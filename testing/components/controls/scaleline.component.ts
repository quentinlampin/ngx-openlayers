import {Component} from '@angular/core';
import {control} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-control-scaleline',
  template: `<ng-content></ng-content>`
})
export class ControlScaleLineComponent {
  instance: control.ScaleLine;

  constructor(private map: MapComponent) {}
}
