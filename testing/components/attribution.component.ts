import {Component, ElementRef} from '@angular/core';
import {Attribution} from 'openlayers';

@Component({
  selector: 'aol-attribution',
  template: '<ng-content></ng-content>'
})
export class AttributionComponent {
  instance: Attribution;
  html: string;

  constructor(private elementRef: ElementRef) {}
}
