import {Component, Input} from '@angular/core';
import {control, layer, View} from 'openlayers';
import {MapComponent} from '../map.component';

@Component({
  selector: 'aol-control-overviewmap',
  template: `<ng-content></ng-content>`
})
export class ControlOverviewMapComponent {
  instance: control.OverviewMap;
  @Input() collapsed: boolean;
  @Input() collapseLabel: string;
  @Input() collapsible: boolean;
  @Input() label: string;
  @Input() layers: layer.Layer[];
  @Input() target: Element;
  @Input() tipLabel: string;
  @Input() view: View;

  constructor(private map: MapComponent) {}
}
