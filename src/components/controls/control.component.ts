import { Component, ElementRef, Host, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control',
  template: `<div #wrapper><ng-content></ng-content></div>`
})
export class ControlComponent implements OnInit, OnDestroy {
  public componentType: string = 'control';
  instance: control.Control;
  element: Element;

  @ViewChild('wrapper') wrapper: ElementRef;

  constructor(
    @Host() private map: MapComponent
  ) {
  }

  ngOnInit() {
    this.element = this.wrapper.nativeElement.children[0];
    this.instance = new control.Control(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-control-attribution');
    this.map.instance.removeControl(this.instance);
  }
}
