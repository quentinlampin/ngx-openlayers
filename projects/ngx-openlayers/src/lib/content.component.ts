import { Component, ElementRef, inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'aol-content',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class ContentComponent {
  readonly elementRef = inject(ElementRef);
}
