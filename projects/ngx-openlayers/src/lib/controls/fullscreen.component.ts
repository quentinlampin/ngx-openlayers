import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-fullscreen',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ControlFullScreenComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  className: string;
  @Input()
  label: string;
  @Input()
  labelActive: string;
  @Input()
  tipLabel: string;
  @Input()
  keys: boolean;

  instance: FullScreen;

  ngOnInit(): void {
    this.instance = new FullScreen(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    // console.log('removing aol-control-fullscreen');
    this.map.instance.removeControl(this.instance);
  }
}
