import {
  Component,
  Host,
  Input,
  AfterContentInit,
  forwardRef,
  OnChanges,
  ContentChild,
  SimpleChanges,
  Optional,
  Output,
  EventEmitter,
} from '@angular/core';
import { XYZ } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceRasterComponent } from './raster.component';
import { Size } from 'ol/size';
import { TileSourceEvent } from 'ol/source/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LoadFunction, UrlFunction } from 'ol/Tile';

@Component({
  selector: 'aol-source-xyz',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }],
})
export class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
  instance: XYZ;
  @Input()
  cacheSize: number;
  @Input()
  crossOrigin: string;
  @Input()
  opaque: boolean;
  @Input()
  projection: string;
  @Input()
  reprojectionErrorThreshold: number;
  @Input()
  minZoom: number;
  @Input()
  maxZoom: number;
  @Input()
  tileGrid: TileGrid;
  @Input()
  tileLoadFunction?: LoadFunction;
  @Input()
  tilePixelRatio: number;
  @Input()
  tileSize: number | Size;
  @Input()
  tileUrlFunction?: UrlFunction;
  @Input()
  url: string;
  @Input()
  urls: string[];
  @Input()
  wrapX: boolean;

  @ContentChild(TileGridComponent)
  tileGridXYZ: TileGridComponent;

  @Output()
  tileLoadStart: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadEnd: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadError: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();

  constructor(
    @Optional()
    @Host()
    layer: LayerTileComponent,
    @Optional()
    @Host()
    raster?: SourceRasterComponent
  ) {
    super(layer, raster);
  }

  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: { [index: string]: any } = {};

    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }

    this.instance.setProperties(properties, false);
    if (changes.hasOwnProperty('url')) {
      this.init();
    }
  }

  init() {
    this.instance = new XYZ(this);

    this.instance.on('tileloadstart', (event: TileSourceEvent) => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', (event: TileSourceEvent) => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', (event: TileSourceEvent) => this.tileLoadError.emit(event));

    this._register(this.instance);
  }
}
