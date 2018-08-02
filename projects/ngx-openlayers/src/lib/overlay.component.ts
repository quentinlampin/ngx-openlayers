import { Component, ContentChild, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay, OverlayPositioning } from 'openlayers';
import { ContentComponent } from './content.component';

@Component({
  selector: 'aol-overlay',
  template: '<ng-content></ng-content>',
})
export class OverlayComponent implements OnInit, OnDestroy {
  componentType = 'overlay';
  instance: Overlay;
  element: Element;
  @ContentChild(ContentComponent)
  content: ContentComponent;

  @Input()
  id: number | string;
  @Input()
  offset: number[];
  @Input()
  positioning: OverlayPositioning | string;
  @Input()
  stopEvent: boolean;
  @Input()
  insertFirst: boolean;
  @Input()
  autoPan: boolean;
  @Input()
  autoPanAnimation: olx.animation.PanOptions;
  @Input()
  autoPanMargin: number;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new Overlay(this);
      this.map.instance.addOverlay(this.instance);
    }
  }

  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeOverlay(this.instance);
    }
  }
}
