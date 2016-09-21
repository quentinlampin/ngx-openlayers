import { Component, ElementRef } from '@angular/core';
import { Map } from 'openlayers';

@Component({
  selector: 'aol-map',
  template: `<ng-content></ng-content>`
})
export class MapComponent extends Map {
  _host_: ElementRef;
  constructor(element: ElementRef){
    console.log('instancing aol-map');
    super({target: element.nativeElement.parentElement});
    this._host_ = element;
  }
}
