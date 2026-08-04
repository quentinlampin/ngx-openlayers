import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { Rotate } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-rotate',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlRotateComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  className = input<string>();
  label = input<string>();
  tipLabel = input<string>();
  duration = input<number>();
  autoHide = input<boolean>();

  instance?: Rotate;

  ngOnInit(): void {
    this.instance = new Rotate({
      className: this.className(),
      label: this.label(),
      tipLabel: this.tipLabel(),
      duration: this.duration(),
      autoHide: this.autoHide(),
    });

    this.map.instance?.addControl(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeControl(this.instance);
    }
  }
}
