import { Component, ContentChild, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { ContentComponent } from './content.component';
import { MapSystemToken } from '../map-system';

@Component({
  selector: 'aol-overlay',
  template: '<ng-content></ng-content>'
})
export class OverlayComponent implements OnInit, OnDestroy {
  componentType = 'overlay';
  instance: ol.Overlay;
  element: Element;
  @ContentChild(ContentComponent) content: ContentComponent;

  @Input() id: number|string;
  @Input() offset: number[];
  @Input() positioning: ol.OverlayPositioning|string;
  @Input() stopEvent: boolean;
  @Input() insertFirst: boolean;
  @Input() autoPan: boolean;
  @Input() autoPanAnimation: olx.animation.PanOptions;
  @Input() autoPanMargin: number;

  constructor(
    @Inject(MapSystemToken) protected mapSystem: any,
    private map: MapComponent
  ) {
  }

  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new this.mapSystem.Overlay(this);
      this.map.instance.addOverlay(this.instance);
    }
  }

  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeOverlay(this.instance);
    }
  }
}
