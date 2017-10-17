import {Component, forwardRef, Host, Input} from '@angular/core';
import {source, TileLoadFunctionType} from 'openlayers';
import {LayerTileComponent} from '../layers';
import {SourceComponent} from './source.component';

@Component({
  selector: 'aol-source-bingmaps',
  template: `<div class="aol-source-bingmaps"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }
  ]
})
export class SourceBingmapsComponent extends SourceComponent {
  instance: source.BingMaps;

  @Input() cacheSize: number;
  @Input() hidpi: boolean;
  @Input() culture: string;
  @Input() key: string;
  @Input() imagerySet: 'Road'|'Aerial'|'AerialWithLabels'|'collinsBart'|'ordnanceSurvey' = 'Aerial';
  @Input() maxZoom: number;
  @Input() reprojectionErrorThreshold: number;
  @Input() tileLoadFunction: TileLoadFunctionType;
  @Input() wrapX: boolean;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }
}
