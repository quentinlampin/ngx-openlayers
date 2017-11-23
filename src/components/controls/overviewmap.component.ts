import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-control-overviewmap',
  template: `<ng-content></ng-content>`
})
export class ControlOverviewMapComponent implements OnInit, OnDestroy {
  instance: ol.control.OverviewMap;
  @Input() collapsed: boolean;
  @Input() collapseLabel: string;
  @Input() collapsible: boolean;
  @Input() label: string;
  @Input() layers: ol.layer.Layer[];
  @Input() target: Element;
  @Input() tipLabel: string;
  @Input() view: ol.View;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
    // console.log('instancing aol-control-overviewmap');
  }

  ngOnInit() {
    this.instance = new this.mapSystem.control.OverviewMap(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-overviewmap');
    this.map.instance.removeControl(this.instance);
  }
}
