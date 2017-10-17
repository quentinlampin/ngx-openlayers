import {Component, Input} from '@angular/core';
import {Feature} from 'openlayers';
import {SourceVectorComponent} from './sources';

@Component({
  selector: 'aol-feature',
  template: `<ng-content></ng-content>`
})
export class FeatureComponent {
  public componentType = 'feature';
  public instance: Feature;

  @Input() id: string|number|undefined;

  constructor(private host: SourceVectorComponent) {}
}
