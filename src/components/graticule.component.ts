import { Component, Input, AfterContentInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { MapComponent } from './map.component';
import { MapSystemToken } from '../map-system';

@Component({
  selector: 'aol-graticule',
  template: '<ng-content></ng-content>'
})
export class GraticuleComponent implements AfterContentInit, OnChanges {
  instance: any;
  public componentType: string = 'graticule';

  @Input() strokeStyle: ol.style.Stroke;
  @Input() showLabels: boolean;
  @Input() lonLabelPosition: number;
  @Input() latLabelPosition: number;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: {[index: string]: any} = {};

    if (!this.instance) {
      return;
    }

    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }

    if (properties) {
      this.instance = new this.mapSystem.Graticule(properties);
    }
    this.instance.setMap(this.map.instance);
  }

  ngAfterContentInit(): void {
    this.instance = new this.mapSystem.Graticule({
      strokeStyle: this.strokeStyle,
      showLabels: this.showLabels,
      lonLabelPosition: this.lonLabelPosition,
      latLabelPosition: this.latLabelPosition
    });
    this.instance.setMap(this.map.instance);
  }
}
