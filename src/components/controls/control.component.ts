import { Component, ContentChild, Inject, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-control',
  template: `<ng-content></ng-content>`
})
export class ControlComponent implements OnInit, OnDestroy {
  public componentType: string = 'control';
  instance: ol.control.Control;
  element: Element;
  @ContentChild(ContentComponent) content: ContentComponent;

  constructor(
    @Inject(MapSystemToken) protected mapSystem: any,
    private map: MapComponent
  ) {
  }

  ngOnInit() {
    if (this.content) {
      this.element = this.content.elementRef.nativeElement;
      this.instance = new this.mapSystem.control.Control(this);
      this.map.instance.addControl(this.instance);
    }
  }

  ngOnDestroy() {
    if (this.instance) {
      this.map.instance.removeControl(this.instance);
    }
  }
}
