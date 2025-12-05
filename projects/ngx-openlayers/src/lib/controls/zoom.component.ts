import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-zoom',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlZoomComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  duration: number;
  @Input()
  zoomInLabel: string | HTMLElement;
  @Input()
  zoomOutLabel: string | HTMLElement;
  @Input()
  zoomInTipLabel: string;
  @Input()
  zoomOutTipLabel: string;
  @Input()
  delta: number;

  instance: Zoom;

  ngOnInit(): void {
    this.instance = new Zoom(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    // console.log('removing aol-control-zoom');
    this.map.instance.removeControl(this.instance);
  }
}
