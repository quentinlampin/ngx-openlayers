import { Component, Host, OnInit, forwardRef, Input } from '@angular/core';
import { source, AttributionLike, TileLoadFunctionType } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-osm',
  template: `<div class="aol-source-osm"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }
  ]
})
export class SourceOsmComponent extends SourceComponent implements OnInit {
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

  ngOnInit() {
    this.instance = new source.OSM(this);
    this.host.instance.setSource(this.instance);
  }
}
