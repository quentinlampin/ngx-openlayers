import { Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import Control, { Options as ControlOptions } from 'ol/control/Control';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';

@Component({
  selector: 'aol-control',
  template: `
    <ng-content></ng-content>
  `,
})
export class ControlComponent implements OnInit, OnDestroy, ControlOptions {
  public componentType = 'control';
  instance: Control;
  element: HTMLElement;
  @ContentChild(ContentComponent)
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
