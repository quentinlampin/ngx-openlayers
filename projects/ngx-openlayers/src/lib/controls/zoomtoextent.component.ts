import { Component, OnDestroy, OnInit, inject, input } from '@angular/core';
import { ZoomToExtent } from 'ol/control';
import { Extent } from 'ol/extent';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoomtoextent',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlZoomToExtentComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  className = input<string>();
  label = input<string | HTMLElement>();
  tipLabel = input<string>();
  extent = input<Extent>();

  instance?: ZoomToExtent;

  ngOnInit(): void {
    this.instance = new ZoomToExtent({
      className: this.className(),
      label: this.label(),
      tipLabel: this.tipLabel(),
      extent: this.extent(),
    });

    this.map.instance?.addControl(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeControl(this.instance);
    }
  }
}
