import {Host, Input} from '@angular/core';
import {source} from 'openlayers';
import {LayerComponent} from '../layers';
import AttributionLike = ol.AttributionLike;

export class SourceComponent {
  public instance: source.Source;
  public componentType: string = 'source';

  @Input() attributions: AttributionLike;

  constructor(@Host() protected host: LayerComponent) {}

}
