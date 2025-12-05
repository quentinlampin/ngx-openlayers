import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ScaleLine } from 'ol/control';
import { MapComponent } from '../map.component';
import { Units } from 'ol/control/ScaleLine';

@Component({
  selector: 'aol-control-scaleline',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlScaleLineComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  units: Units;

  instance: ScaleLine;

  ngOnInit(): void {
    this.instance = new ScaleLine(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    // console.log('removing aol-control-scaleline');
    this.map.instance.removeControl(this.instance);
  }
}
