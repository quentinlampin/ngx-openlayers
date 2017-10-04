import {Component, forwardRef, Host, Input} from '@angular/core';
import {AttributionLike, source, TileLoadFunctionType} from 'openlayers';
import {LayerTileComponent} from '../layers';
import {SourceComponent} from './source.component';

@Component({
  selector: 'aol-source-osm',
  template: `<div class="aol-source-osm"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }
  ]
})
export class SourceOsmComponent extends SourceComponent {
  instance: source.OSM;

  @Input() attributions: AttributionLike;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() maxZoom: number;
  @Input() opaque: boolean;
  @Input() reprojectionErrorThreshold: number;
  @Input() tileLoadFunction: TileLoadFunctionType;
  @Input() url: string;
  @Input() wrapX: boolean;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }
}
