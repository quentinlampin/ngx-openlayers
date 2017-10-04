import {Component, ContentChildren, Host, QueryList} from '@angular/core';
import {Attribution} from 'openlayers';
import {SourceComponent} from './sources/source.component';
import {AttributionComponent} from './attribution.component';

@Component({
  selector: 'aol-attributions',
  template: '<ng-content></ng-content>'
})
export class AttributionsComponent {
  instance: Array<Attribution>;

  @ContentChildren(AttributionComponent) attributions: QueryList<AttributionComponent>;

  constructor(@Host() private source: SourceComponent) {}

}
