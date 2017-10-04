import {Component, Input} from '@angular/core';
import {Coordinate, Extent, View} from 'openlayers';
import {MapComponent} from './map.component';

@Component({
  selector: 'aol-view',
  template: `<ng-content></ng-content>`
})
export class ViewComponent {
  public instance: View;
  public componentType: string = 'view';

  @Input() constrainRotation: boolean|number;
  @Input() enableRotation: boolean;
  @Input() extent: Extent;
  @Input() maxResolution: number;
  @Input() minResolution: number;
  @Input() maxZoom: number;
  @Input() minZoom: number;
  @Input() resolution: number;
  @Input() resolutions: number[];
  @Input() rotation: number;
  @Input() zoom: number;
  @Input() zoomFactor: number;
  @Input() center: Coordinate;

  constructor(private host: MapComponent) {}
}
