import {Component, ElementRef, Input} from '@angular/core';
import {control} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-control-attribution',
  template: ``
})
export class ControlAttributionComponent {
  public componentType: string = 'control';
  instance: control.Attribution;
  target: Element;
  @Input() collapsible: boolean;

  constructor(private map: MapComponent, private element: ElementRef) {}
}
