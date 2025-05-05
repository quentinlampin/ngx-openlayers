import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
import { MapComponent } from '../map.component';

@Component({
    selector: 'aol-control-attribution',
    template: ``,
    standalone: true,
})
export class ControlAttributionComponent implements OnInit, OnDestroy {
  @Input()
  collapsible: boolean;

  componentType = 'control';
  instance: Attribution;
  target: HTMLElement;

  constructor(
    private map: MapComponent,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    this.target = this.element.nativeElement;
    // console.log('ol.control.Attribution init: ', this);
    this.instance = new Attribution(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy(): void {
    // console.log('removing aol-control-attribution');
    this.map.instance.removeControl(this.instance);
  }
}
