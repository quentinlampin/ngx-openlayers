import { Component, ContentChild, Input, OnDestroy, OnInit } from '@angular/core';
import { Overlay } from 'ol';
import { PanOptions, Positioning } from 'ol/Overlay';
import { ContentComponent } from './content.component';
import { MapComponent } from './map.component';

@Component({
  selector: 'aol-overlay',
  template: '<ng-content></ng-content>',
})
export class OverlayComponent implements OnInit, OnDestroy {
  @ContentChild(ContentComponent, { static: true })
  content: ContentComponent;

  @Input()
  id: number | string;
  @Input()
  offset: number[];
  @Input()
  positioning: Positioning;
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

  componentType = 'overlay';
  instance: Overlay;
  element: HTMLElement;

  constructor(private map: MapComponent) {}

  ngOnInit(): void {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new Overlay(this);
      this.map.instance.addOverlay(this.instance);
    }
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance.removeOverlay(this.instance);
    }
  }
}
