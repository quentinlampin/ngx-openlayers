import { Component, ContentChild, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay, PanOptions } from 'ol';
import { ContentComponent } from './content.component';
import OverlayPositioning from 'ol/OverlayPositioning';

@Component({
  selector: 'aol-overlay',
  template: '<ng-content></ng-content>',
})
export class OverlayComponent implements OnInit, OnDestroy {
  componentType = 'overlay';
  instance: Overlay;
  element: Element;
  @ContentChild(ContentComponent, { static: true })
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
  autoPanAnimation: PanOptions;
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
