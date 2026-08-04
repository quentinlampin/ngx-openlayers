import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { ScaleLine } from 'ol/control';
import { Units } from 'ol/control/ScaleLine';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-scaleline',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlScaleLineComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  units = input<Units>();

  instance?: ScaleLine;

  ngOnInit(): void {
    this.instance = new ScaleLine({
      units: this.units(),
    });

    this.map.instance?.addControl(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeControl(this.instance);
    }
  }
}
