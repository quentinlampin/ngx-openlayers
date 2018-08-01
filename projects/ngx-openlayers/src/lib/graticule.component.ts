import { Component, Input, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { Graticule, style } from 'openlayers';
import { MapComponent } from './map.component';

@Component({
  selector: 'aol-graticule',
  template: '<ng-content></ng-content>',
})
export class GraticuleComponent implements AfterContentInit, OnChanges {
  instance: any;
  public componentType = 'graticule';

  @Input()
  strokeStyle: style.Stroke;
  @Input()
  showLabels: boolean;
  @Input()
  lonLabelPosition: number;
  @Input()
  latLabelPosition: number;

  constructor(private map: MapComponent) {}

  ngOnChanges(changes: SimpleChanges) {
    const properties: { [index: string]: any } = {};

    if (!this.instance) {
      return;
    }

    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }

    if (properties) {
      this.instance = new Graticule(properties);
    }
    this.instance.setMap(this.map.instance);
  }

  ngAfterContentInit(): void {
    this.instance = new Graticule({
      strokeStyle: this.strokeStyle,
      showLabels: this.showLabels,
      lonLabelPosition: this.lonLabelPosition,
      latLabelPosition: this.latLabelPosition,
    });
    this.instance.setMap(this.map.instance);
  }
}
