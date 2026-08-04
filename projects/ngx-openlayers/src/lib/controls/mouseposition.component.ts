import { Component, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import { CoordinateFormat } from 'ol/coordinate';
import { ProjectionLike } from 'ol/proj';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-mouseposition',
  template: ``,
  standalone: true,
})
export class ControlMousePositionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);
  private element = inject(ElementRef<HTMLElement>);

  coordinateFormat = input<CoordinateFormat>();
  projection = input<ProjectionLike>();
  wrapX = input<boolean>();

  target?: HTMLElement;

  instance?: MousePosition;

  ngOnInit(): void {
    this.target = this.element.nativeElement;

    this.instance = new MousePosition({
      coordinateFormat: this.coordinateFormat(),
      projection: this.projection(),
      wrapX: this.wrapX(),
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
