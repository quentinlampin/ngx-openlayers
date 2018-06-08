import { Component, ElementRef, OnInit } from '@angular/core';
import { Attribution } from 'openlayers';

@Component({
  selector: 'aol-attribution',
  template: '<ng-content></ng-content>',
})
export class AttributionComponent implements OnInit {
  instance: Attribution;
  html: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.html = this.elementRef.nativeElement.innerHTML;
    this.instance = new Attribution(this);
  }
}
