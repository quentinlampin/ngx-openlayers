import { Component, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';
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
  private element = inject(ElementRef);

  @Input()
  coordinateFormat: CoordinateFormat;
  @Input()
  projection: ProjectionLike;
  @Input()
  wrapX: boolean;
  target: HTMLElement;

  instance: MousePosition;

  ngOnInit(): void {
    this.target = this.element.nativeElement;
    // console.log('ol.control.MousePosition init: ', this);
    this.instance = new MousePosition(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    // console.log('removing aol-control-mouseposition');
    this.map.instance.removeControl(this.instance);
  }
}
