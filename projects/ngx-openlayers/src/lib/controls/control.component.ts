import { Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
import { TileGridComponent } from '../tilegrid.component';

@Component({
  selector: 'aol-control',
  template: `
    <ng-content></ng-content>
  `,
})
export class ControlComponent implements OnInit, OnDestroy {
  public componentType = 'control';
  instance: Control;
  element: Element;
  @ContentChild(ContentComponent, { static: true })
  content: ContentComponent;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new Control(this);
      this.map.instance.addControl(this.instance);
    }
  }

  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeControl(this.instance);
    }
  }
}
