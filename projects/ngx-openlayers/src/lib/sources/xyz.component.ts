import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Host,
  Input,
  OnChanges,
  Optional,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Size } from 'ol/size';
import { XYZ } from 'ol/source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LoadFunction, UrlFunction } from 'ol/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';

import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import BaseObject from 'ol/Object';

@Component({
    selector: 'aol-source-xyz',
    template: ` <ng-content></ng-content> `,
    providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }],
    standalone: true,
})
export class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
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

  instance: XYZ;

  constructor(
    @Optional()
    @Host()
    protected layer?: LayerTileComponent
  ) {
    super(layer);
  }

  ngAfterContentInit(): void {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    const properties: Parameters<BaseObject['setProperties']>[0] = {};
    for (const key in changes) {
      properties[key] = changes[key].currentValue;
    }
    this.instance.setProperties(properties, false);
    if (changes.hasOwnProperty('url')) {
      this.init();
    }
  }

  init(): void {
    this.instance = new XYZ(this);

    this.instance.on('tileloadstart', (event: TileSourceEvent) => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', (event: TileSourceEvent) => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', (event: TileSourceEvent) => this.tileLoadError.emit(event));

    this._register(this.instance);
  }
}
