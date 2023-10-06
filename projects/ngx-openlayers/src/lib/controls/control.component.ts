import { Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { Control } from 'ol/control';
import { ContentComponent } from '../content.component';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control',
  template: ` <ng-content></ng-content> `,
})
export class ControlComponent implements OnInit, OnDestroy {
  @ContentChild(ContentComponent, { static: true })
  content: ContentComponent;

  componentType = 'control';
  instance: Control;
  element: Element;

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
