import {Component} from '@angular/core';
import {control} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-control-rotate',
  template: `<ng-content></ng-content>`
})
export class ControlRotateComponent {
  instance: control.Rotate;

  constructor(private map: MapComponent) {}
}
