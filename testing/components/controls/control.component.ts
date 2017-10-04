import {Component, ContentChild} from '@angular/core';
import {control} from 'openlayers';
import {MapComponent} from '../map.component';
import {ContentComponent} from '../content.component';

@Component({
  selector: 'aol-control',
  template: `<ng-content></ng-content>`
})
export class ControlComponent {
  public componentType: string = 'control';
  instance: control.Control;
  element: Element;
  @ContentChild(ContentComponent) content: ContentComponent;

  constructor(private map: MapComponent) {}
}
