import { Component, ElementRef, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';

@Component({
  selector: 'aol-attribution',
  template: '<ng-content></ng-content>',
})
export class AttributionComponent implements OnInit {
  instance: Attribution;
  html: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.html = this.elementRef.nativeElement.innerHTML;
    this.instance = new Attribution();
  }
}
