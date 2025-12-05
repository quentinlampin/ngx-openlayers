import { AfterContentInit, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { OSM } from 'ol/source';
import { AttributionLike } from 'ol/source/Source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LoadFunction } from 'ol/Tile';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';

@Component({
  selector: 'aol-source-osm',
  template: ` <div class="aol-source-osm"></div> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent) }],
  standalone: true,
})
export class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
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

  instance: OSM;

  ngAfterContentInit(): void {
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
