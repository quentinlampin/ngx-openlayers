import { Component, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-attribution',
  template: ``,
  standalone: true,
})
export class ControlAttributionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);
  private element = inject(ElementRef);

  collapsible = input<boolean>();

  componentType = 'control';
  instance?: Attribution;
  target?: HTMLElement;

  ngOnInit(): void {
    this.target = this.element.nativeElement;

    this.instance = new Attribution({
      collapsible: this.collapsible(),
      target: this.target,
    });

    this.map.instance?.addControl(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeControl(this.instance);
    }
  }
}
