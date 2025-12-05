import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
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

  @Input()
  className: string;
  @Input()
  label: string | HTMLElement;
  @Input()
  tipLabel: string;
  @Input()
  extent: Extent;

  instance: ZoomToExtent;

  ngOnInit(): void {
    this.instance = new ZoomToExtent(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    // console.log('removing aol-control-zoomtoextent');
    this.map.instance.removeControl(this.instance);
  }
}
