import { Component, OnDestroy, OnInit, effect, inject, input } from '@angular/core';
import { View } from 'ol';
import { OverviewMap } from 'ol/control';
import { Layer } from 'ol/layer';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-overviewmap',
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class ControlOverviewMapComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  collapsed = input<boolean>();
  collapseLabel = input<string>();
  collapsible = input<boolean>();
  label = input<string>();
  layers = input<Layer[]>();
  target = input<HTMLElement>();
  tipLabel = input<string>();
  view = input<View>();

  instance?: OverviewMap;

  constructor() {
    effect(() => {
      this.view();

      if (this.instance) {
        this.reloadInstance();
      }
    });
  }

  ngOnInit(): void {
    this.instance = this.createInstance();
    this.map.instance?.addControl(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeControl(this.instance);
    }
  }

  private createInstance(): OverviewMap {
    return new OverviewMap({
      collapsed: this.collapsed(),
      collapseLabel: this.collapseLabel(),
      collapsible: this.collapsible(),
      label: this.label(),
      layers: this.layers(),
      target: this.target(),
      tipLabel: this.tipLabel(),
      view: this.view(),
    });
  }

  private reloadInstance(): void {
    if (this.instance) {
      this.map.instance?.removeControl(this.instance);
    }

    this.instance = this.createInstance();
    this.map.instance?.addControl(this.instance);
  }
}
