import { Component, OnDestroy, effect, inject, input } from '@angular/core';
import { Graticule } from 'ol';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';

@Component({
  selector: 'aol-graticule',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class GraticuleComponent implements OnDestroy {
  private map = inject(MapComponent);

  strokeStyle = input<Stroke>();
  showLabels = input<boolean>();
  lonLabelPosition = input<number>();
  latLabelPosition = input<number>();

  instance?: Graticule;
  componentType = 'graticule';

  constructor() {
    effect(() => {
      this.instance = new Graticule({
        strokeStyle: this.strokeStyle(),
        showLabels: this.showLabels(),
        lonLabelPosition: this.lonLabelPosition(),
        latLabelPosition: this.latLabelPosition(),
      });

      if (this.map.instance) {
        this.instance.setMap(this.map.instance);
      }
    });
  }

  ngOnDestroy(): void {
    this.instance?.setMap(null);
  }
}
