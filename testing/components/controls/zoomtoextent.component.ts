import {Component} from '@angular/core';
import {control} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-control-zoomtoextent',
  template: `<ng-content></ng-content>`
})
export class ControlZoomToExtentComponent {
  instance: control.ZoomToExtent;

  constructor(private map: MapComponent) {}
}
