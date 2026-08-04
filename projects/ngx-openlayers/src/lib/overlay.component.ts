import { Component, ContentChild, OnDestroy, OnInit, inject, input } from '@angular/core';
import { Overlay } from 'ol';
import { PanOptions, Positioning } from 'ol/Overlay';
import { ContentComponent } from './content.component';
import { MapComponent } from './map.component';

@Component({
  selector: 'aol-overlay',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class OverlayComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @ContentChild(ContentComponent, { static: true })
  content!: ContentComponent;

  id = input<number | string>();
  offset = input<number[]>();
  positioning = input<Positioning>();
  stopEvent = input<boolean>();
  insertFirst = input<boolean>();
  autoPan = input<boolean>();
  autoPanAnimation = input<PanOptions>();
  autoPanMargin = input<number>();

  componentType = 'overlay';
  instance?: Overlay;
  element!: HTMLElement;

  ngOnInit(): void {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;

      this.instance = new Overlay({
        id: this.id(),
        element: this.element,
        offset: this.offset(),
        positioning: this.positioning(),
        stopEvent: this.stopEvent(),
        insertFirst: this.insertFirst(),
        autoPan: this.autoPan()
          ? {
              ...this.autoPanAnimation(),
              margin: this.autoPanMargin(),
            }
          : undefined,
      });

      this.map.instance?.addOverlay(this.instance);
    }
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeOverlay(this.instance);
    }
  }
}
