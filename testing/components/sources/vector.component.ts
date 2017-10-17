import {Component, forwardRef, Host, Input} from '@angular/core';
import {source} from 'openlayers';
import {LayerVectorComponent} from '../layers';
import {SourceComponent} from './source.component';

@Component({
  selector: 'aol-source-vector',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }
  ]
})
export class SourceVectorComponent extends SourceComponent {
  instance: source.Vector;
  @Input() overlaps: boolean;
  @Input() useSpatialIndex: boolean;
  @Input() wrapX: boolean;
  @Input() url: string;
  @Input() format: ol.format.Feature;
  @Input() strategy: ol.LoadingStrategy;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }
}
