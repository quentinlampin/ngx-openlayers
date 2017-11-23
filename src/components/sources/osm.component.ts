import { Component, Host, forwardRef, Input, AfterContentInit, Inject } from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-source-osm',
  template: `<div class="aol-source-osm"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }
  ]
})
export class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
  instance: ol.source.OSM;

  @Input() attributions: ol.AttributionLike;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() maxZoom: number;
  @Input() opaque: boolean;
  @Input() reprojectionErrorThreshold: number;
  @Input() tileLoadFunction: ol.TileLoadFunctionType;
  @Input() url: string;
  @Input() wrapX: boolean;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerTileComponent) {
    super(mapSystem, layer);
  }

  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.instance = new this.mapSystem.source.OSM(this);
    this.host.instance.setSource(this.instance);
  }
}
