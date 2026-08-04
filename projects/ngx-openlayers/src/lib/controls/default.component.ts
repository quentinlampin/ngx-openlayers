import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { Collection } from 'ol';
import { Control, defaults } from 'ol/control';
import { Options as AttributionOptions } from 'ol/control/Attribution';
import { Options as RotateOptions } from 'ol/control/Rotate';
import { Options as ZoomOptions } from 'ol/control/Zoom';

import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-defaults',
  template: '',
  standalone: true,
})
export class DefaultControlComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  attribution = input<boolean>();
  attributionOptions = input<AttributionOptions>();
  rotate = input<boolean>();
  rotateOptions = input<RotateOptions>();
  zoom = input<boolean>();
  zoomOptions = input<ZoomOptions>();

  instance?: Collection<Control>;

  ngOnInit(): void {
    this.instance = defaults({
      attribution: this.attribution(),
      attributionOptions: this.attributionOptions(),
      rotate: this.rotate(),
      rotateOptions: this.rotateOptions(),
      zoom: this.zoom(),
      zoomOptions: this.zoomOptions(),
    });

    this.instance.forEach((c) => this.map.instance?.addControl(c));
  }

  ngOnDestroy(): void {
    this.instance?.forEach((c) => this.map.instance?.removeControl(c));
  }
}
