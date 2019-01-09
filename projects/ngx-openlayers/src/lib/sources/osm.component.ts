import { Component, Host, forwardRef, Input, AfterContentInit, Optional, Output, EventEmitter } from '@angular/core';
import { source, AttributionLike, TileLoadFunctionType } from 'openlayers';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import { SourceRasterComponent } from './raster.component';

@Component({
  selector: 'aol-source-osm',
  template: `
    <div class="aol-source-osm"></div>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }],
})
export class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
  instance: source.OSM;

  @Input()
  attributions: AttributionLike;
  @Input()
  cacheSize: number;
  @Input()
  crossOrigin: string;
  @Input()
  maxZoom: number;
  @Input()
  opaque: boolean;
  @Input()
  reprojectionErrorThreshold: number;
  @Input()
  tileLoadFunction: TileLoadFunctionType;
  @Input()
  url: string;
  @Input()
  wrapX: boolean;

  @Output()
  tileLoadStart: EventEmitter<source.TileEvent> = new EventEmitter<source.TileEvent>();
  @Output()
  tileLoadEnd: EventEmitter<source.TileEvent> = new EventEmitter<source.TileEvent>();
  @Output()
  tileLoadError: EventEmitter<source.TileEvent> = new EventEmitter<source.TileEvent>();

  constructor(
    @Host()
    @Optional()
    layer: LayerTileComponent,
    @Host()
    @Optional()
    raster?: SourceRasterComponent
  ) {
    super(layer, raster);
  }

  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }

    this.instance = new source.OSM(this);

    this.instance.on('tileloadstart', (event: source.TileEvent) => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', (event: source.TileEvent) => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', (event: source.TileEvent) => this.tileLoadError.emit(event));

    this._register(this.instance);
  }
}
