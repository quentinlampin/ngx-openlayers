import { Component, ElementRef, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { Attribution } from 'ol/control';

@Component({
  selector: 'aol-attribution',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class AttributionComponent implements OnInit {
  private elementRef = inject(ElementRef);

  instance?: Attribution;
  html: string;

  ngOnInit(): void {
    this.html = this.elementRef.nativeElement.innerHTML;
    this.instance = new Attribution();
  }
}
