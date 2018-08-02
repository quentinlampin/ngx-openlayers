import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { control, View, layer } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-overviewmap',
  template: `<ng-content></ng-content>`,
})
export class ControlOverviewMapComponent implements OnInit, OnDestroy {
  instance: control.OverviewMap;
  @Input()
  collapsed: boolean;
  @Input()
  collapseLabel: string;
  @Input()
  collapsible: boolean;
  @Input()
  label: string;
  @Input()
  layers: layer.Layer[];
  @Input()
  target: Element;
  @Input()
  tipLabel: string;
  @Input()
  view: View;

  constructor(private map: MapComponent) {
    // console.log('instancing aol-control-overviewmap');
  }

  ngOnInit() {
    this.instance = new control.OverviewMap(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-overviewmap');
    this.map.instance.removeControl(this.instance);
  }
}
