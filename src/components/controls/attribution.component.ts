import { Component, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-control-attribution',
  template: ``
})
export class ControlAttributionComponent implements OnInit, OnDestroy {
  public componentType: string = 'control';
  instance: ol.control.Attribution;
  target: Element;
  @Input() collapsible: boolean;

  constructor(
    @Inject(MapSystemToken) protected mapSystem: any,
    private map: MapComponent,
    private element: ElementRef
  ) {
  }

  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.Attribution init: ', this);
    this.instance = new this.mapSystem.control.Attribution(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-attribution');
    this.map.instance.removeControl(this.instance);
  }
}
