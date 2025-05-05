import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'aol-content',
    template: '<ng-content></ng-content>',
    standalone: true,
})
export class ContentComponent {
  constructor(public elementRef: ElementRef) {}
}
