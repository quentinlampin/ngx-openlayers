import { AfterViewInit, Component, ContentChildren, Host, QueryList } from '@angular/core';
import { AttributionComponent } from './attribution.component';
import { SourceComponent } from './sources/source.component';

@Component({
  selector: 'aol-attributions',
  template: '<ng-content></ng-content>',
})
export class AttributionsComponent implements AfterViewInit {
  @ContentChildren(AttributionComponent)
  attributions: QueryList<AttributionComponent>;

  instance: Array<string>;

  constructor(@Host() private source: SourceComponent) {}

  /* we can do this at the very end */
  ngAfterViewInit(): void {
    if (this.attributions.length) {
      this.instance = this.attributions.map((cmp) => cmp.html);
      // console.log('setting attributions:', this.instance);
      this.source.instance.setAttributions(this.instance);
    }
  }
}
