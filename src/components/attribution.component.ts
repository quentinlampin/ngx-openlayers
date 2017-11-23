import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MapSystemToken } from '../map-system';

@Component({
  selector: 'aol-attribution',
  template: '<ng-content></ng-content>'
})
export class AttributionComponent implements OnInit {
  instance: ol.Attribution;
  html: string;

  constructor(
    @Inject(MapSystemToken) protected mapSystem: any,
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.html = this.elementRef.nativeElement.innerHTML;
    this.instance = new this.mapSystem.Attribution(this);
  }
}
