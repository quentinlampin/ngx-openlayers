import { Component, Host, forwardRef, Input, AfterContentInit, Optional, Output, EventEmitter } from '@angular/core';
import { OSM } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import { SourceRasterComponent } from './raster.component';
import { LoadFunction } from 'ol/Tile';
import { AttributionLike } from 'ol/source/Source';
import { TileSourceEvent } from 'ol/source/Tile';

@Component({
  selector: 'aol-source-osm',
  template: `
    <div class="aol-source-osm"></div>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }],
})
export class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
  instance: OSM;

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
  tileLoadFunction: LoadFunction;
  @Input()
  url: string;
  @Input()
  wrapX: boolean;

  @Output()
  tileLoadStart: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadEnd: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadError: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();

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

    this.instance = new OSM(this);

    this.instance.on('tileloadstart', (event: TileSourceEvent) => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', (event: TileSourceEvent) => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', (event: TileSourceEvent) => this.tileLoadError.emit(event));
    this._register(this.instance);
  }
}
