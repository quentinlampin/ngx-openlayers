import {Component, Input} from '@angular/core';
import {Collection, control} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-control-defaults',
  template: ''
})
export class DefaultControlComponent  {
  instance: Collection<control.Control>;
  @Input() attribution: boolean;
  @Input() attributionOptions: olx.control.AttributionOptions;
  @Input() rotate: boolean;
  @Input() rotateOptions: olx.control.RotateOptions;
  @Input() zoom: boolean;
  @Input() zoomOptions: olx.control.ZoomOptions;

  constructor(private map: MapComponent) {}
}
