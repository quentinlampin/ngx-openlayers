import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control-attribution',
  template: ``,
})
export class ControlAttributionComponent implements OnInit, OnDestroy {
  public componentType = 'control';
  instance: Attribution;
  target: Element;
  @Input()
  collapsible: boolean;

  constructor(private map: MapComponent, private element: ElementRef) {}

  ngOnInit() {
    this.target = this.element.nativeElement;
    // console.log('ol.control.Attribution init: ', this);
    this.instance = new Attribution(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-attribution');
    this.map.instance.removeControl(this.instance);
  }
}
