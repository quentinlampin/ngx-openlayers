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
import { source, Size, TileUrlFunctionType, TileLoadFunctionType, tilegrid } from 'openlayers';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceRasterComponent } from './raster.component';

@Component({
  selector: 'aol-source-xyz',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }],
})
export class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
  instance: source.XYZ;
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
  tileGrid: tilegrid.TileGrid;
  @Input()
  tileLoadFunction?: TileLoadFunctionType;
  @Input()
  tilePixelRatio: number;
  @Input()
  tileSize: number | Size;
  @Input()
  tileUrlFunction: TileUrlFunctionType;
  @Input()
  url: string;
  @Input()
  urls: string[];
  @Input()
  wrapX: boolean;

  @ContentChild(TileGridComponent)
  tileGridXYZ: TileGridComponent;

  @Output()
  tileLoadStart: EventEmitter<source.TileEvent> = new EventEmitter<source.TileEvent>();
  @Output()
  tileLoadEnd: EventEmitter<source.TileEvent> = new EventEmitter<source.TileEvent>();
  @Output()
  tileLoadError: EventEmitter<source.TileEvent> = new EventEmitter<source.TileEvent>();

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
    this.instance = new source.XYZ(this);

    this.instance.on('tileloadstart', (event: source.TileEvent) => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', (event: source.TileEvent) => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', (event: source.TileEvent) => this.tileLoadError.emit(event));

    this._register(this.instance);
  }
}
