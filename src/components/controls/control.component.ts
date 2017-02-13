import { Component, ElementRef, Host, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-control',
  template: `<ng-content></ng-content>`
})
export class ControlComponent implements OnInit, OnDestroy {
  public componentType: string = 'control';
  instance: control.Control;
  element: Element;

  constructor(
    @Host() private map: MapComponent,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.element = this.elementRef.nativeElement.children[0];
    this.instance = new control.Control(this);
    this.map.instance.addControl(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeControl(this.instance);
  }
}
