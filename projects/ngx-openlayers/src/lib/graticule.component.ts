import { AfterContentInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Graticule } from 'ol';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';
import { Options } from 'ol/layer/Graticule';

@Component({
  selector: 'aol-graticule',
  template: '<ng-content></ng-content>',
})
export class GraticuleComponent implements AfterContentInit, OnChanges, OnDestroy {
  @Input()
  strokeStyle: Stroke;
  @Input()
  showLabels: boolean;
  @Input()
  lonLabelPosition: number;
  @Input()
  latLabelPosition: number;

  instance: Graticule;
  componentType = 'graticule';

  constructor(private map: MapComponent) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    const properties: Options = {};
    for (const key in changes) {
      properties[key] = changes[key].currentValue;
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

  ngOnDestroy(): void {
    this.instance.setMap(null);
  }
}
