import { Component, ElementRef, Host, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay, OverlayPositioning } from 'openlayers';

@Component({
  selector: 'aol-overlay',
  template: '<ng-content></ng-content>'
})
export class OverlayComponent implements OnInit, OnDestroy {
  componentType = 'overlay';
  instance: Overlay;
  element: Element;
  @Input() id: number|string;
  @Input() offset: number[];
  @Input() positioning: OverlayPositioning|string;
  @Input() stopEvent: boolean;
  @Input() insertFirst: boolean;
  @Input() autoPan: boolean;
  @Input() autoPanAnimation: olx.animation.PanOptions;
  @Input() autoPanMargin: number;

  constructor(
    @Host() private map: MapComponent,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.element = this.elementRef.nativeElement.children[0];
    this.instance = new Overlay(this);
    this.map.instance.addOverlay(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeOverlay(this.instance);
  }
}
