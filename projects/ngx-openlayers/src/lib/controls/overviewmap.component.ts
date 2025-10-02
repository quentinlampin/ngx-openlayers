import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { View } from 'ol';
import { OverviewMap } from 'ol/control';
import { Layer } from 'ol/layer';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-overviewmap',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlOverviewMapComponent implements OnInit, OnChanges, OnDestroy {
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
  target: HTMLElement;
  @Input()
  tipLabel: string;
  @Input()
  view: View;

  instance: OverviewMap;

  constructor(private map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new OverviewMap(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeControl(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance != null && changes.hasOwnProperty('view')) {
      this.reloadInstance();
    }
  }

  private reloadInstance(): void {
    this.map.instance.removeControl(this.instance);
    this.instance = new OverviewMap(this);
    this.map.instance.addControl(this.instance);
  }
}
