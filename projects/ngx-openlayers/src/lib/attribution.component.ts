import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { Attribution } from 'ol/control';

@Component({
  selector: 'aol-attribution',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class AttributionComponent implements OnInit {
  private elementRef = inject(ElementRef);

  instance: Attribution;
  html: string;

  ngOnInit(): void {
    this.html = this.elementRef.nativeElement.innerHTML;
    this.instance = new Attribution();
  }
}
