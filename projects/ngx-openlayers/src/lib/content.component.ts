import { Component, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'aol-content',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class ContentComponent {
  elementRef = inject(ElementRef);
}
