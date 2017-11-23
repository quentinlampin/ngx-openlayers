import { Component, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-control-mouseposition',
  template: ``
})
export class ControlMousePositionComponent implements OnInit, OnDestroy {
  instance: ol.control.MousePosition;
  @Input() coordinateFormat: ol.CoordinateFormatType;
  @Input() projection: ol.ProjectionLike;
  target: Element;

  constructor(
    @Inject(MapSystemToken) protected mapSystem: any,
    private map: MapComponent,
    private element: ElementRef
  ) {
  }

  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.MousePosition init: ', this);
    this.instance = new this.mapSystem.control.MousePosition(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-mouseposition');
    this.map.instance.removeControl(this.instance);
  }
}
