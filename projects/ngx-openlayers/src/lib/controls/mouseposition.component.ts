import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { control, CoordinateFormatType, ProjectionLike } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-mouseposition',
  template: ``,
})
export class ControlMousePositionComponent implements OnInit, OnDestroy {
  instance: control.MousePosition;
  @Input()
  coordinateFormat: CoordinateFormatType;
  @Input()
  projection: ProjectionLike;
  target: Element;

  constructor(private map: MapComponent, private element: ElementRef) {}

  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.MousePosition init: ', this);
    this.instance = new control.MousePosition(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-mouseposition');
    this.map.instance.removeControl(this.instance);
  }
}
