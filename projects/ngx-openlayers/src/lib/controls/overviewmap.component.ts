import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Layer } from 'ol/layer';
import { View } from 'ol';
import { OverviewMap } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-overviewmap',
  template: `
    <ng-content></ng-content>
  `,
})
export class ControlOverviewMapComponent implements OnInit, OnDestroy {
  instance: OverviewMap;
  @Input()
  collapsed: boolean;
  @Input()
  collapseLabel: string;
  @Input()
  collapsible: boolean;
  @Input()
  label: string;
  @Input()
  layers: Layer[];
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
    this.instance = new OverviewMap(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-overviewmap');
    this.map.instance.removeControl(this.instance);
  }
}
