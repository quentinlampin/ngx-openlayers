import {Component} from '@angular/core';
import {control} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-control-fullscreen',
  template: `<ng-content></ng-content>`
})
export class ControlFullScreenComponent {
  instance: control.FullScreen;

  constructor(private map: MapComponent) {}
}
