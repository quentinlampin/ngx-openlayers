import {Component, ContentChild, Input} from '@angular/core';
import {MapComponent} from './map.component';
import {Overlay, OverlayPositioning} from 'openlayers';
import {ContentComponent} from './content.component';

@Component({
  selector: 'aol-overlay',
  template: '<ng-content></ng-content>'
})
export class OverlayComponent {
  componentType = 'overlay';
  instance: Overlay;
  element: Element;
  @ContentChild(ContentComponent) content: ContentComponent;

  @Input() id: number|string;
  @Input() offset: number[];
  @Input() positioning: OverlayPositioning|string;
  @Input() stopEvent: boolean;
  @Input() insertFirst: boolean;
  @Input() autoPan: boolean;
  @Input() autoPanAnimation: olx.animation.PanOptions;
  @Input() autoPanMargin: number;

  constructor(private map: MapComponent) {}
}
