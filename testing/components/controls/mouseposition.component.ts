import {Component, ElementRef, Input} from '@angular/core';
import {control, CoordinateFormatType, ProjectionLike} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-control-mouseposition',
  template: ``
})
export class ControlMousePositionComponent {
  instance: control.MousePosition;
  @Input() coordinateFormat: CoordinateFormatType;
  @Input() projection: ProjectionLike;
  target: Element;

  constructor(private map: MapComponent, private element: ElementRef) {}
}
