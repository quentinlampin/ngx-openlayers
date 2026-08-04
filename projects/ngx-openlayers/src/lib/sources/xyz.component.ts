import {
  AfterContentInit,
  Component,
  ContentChild,
  DestroyRef,
  effect,
  computed,
  forwardRef,
  inject,
  output,
  signal,
  input,
} from '@angular/core';
import { EventsKey } from 'ol/events';
import { unByKey } from 'ol/Observable';
import { Size } from 'ol/size';
import { XYZ } from 'ol/source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LoadFunction, UrlFunction } from 'ol/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';

import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-xyz',
  template: `<ng-content></ng-content>`,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceXYZComponent),
    },
  ],
  standalone: true,
})
export class SourceXYZComponent extends SourceComponent implements AfterContentInit {
  protected layer?: LayerTileComponent;

  cacheSize = input<number>();
  crossOrigin = input<string>();
  projection = input<string>();
  reprojectionErrorThreshold = input<number>();
  minZoom = input<number>();
  maxZoom = input<number>();
  tileGrid = input<TileGrid>();
  tileLoadFunction = input<LoadFunction>();
  tilePixelRatio = input<number>();
  tileSize = input<number | Size>();
  tileUrlFunction = input<UrlFunction>();
  url = input<string>();
  urls = input<string[]>();
  wrapX = input<boolean>();

  @ContentChild(TileGridComponent)
  tileGridXYZ?: TileGridComponent;

  // Content-child grid takes priority over the input when present.
  protected readonly contentTileGrid = signal<TileGrid | undefined>(undefined);
  protected readonly effectiveTileGrid = computed(() => this.contentTileGrid() ?? this.tileGrid());
  tileLoadStart = output<TileSourceEvent>();
  tileLoadEnd = output<TileSourceEvent>();
  tileLoadError = output<TileSourceEvent>();

  instance?: XYZ;

  protected readonly host = inject(LayerTileComponent, {
    optional: true,
    host: true,
  });

  protected readonly destroyRef = inject(DestroyRef);
  protected eventKeys: EventsKey[] = [];
  protected previousUrl?: string;

  constructor() {
    super();

    effect(() => {
      const properties = {
        cacheSize: this.cacheSize(),
        crossOrigin: this.crossOrigin(),
        projection: this.projection(),
        reprojectionErrorThreshold: this.reprojectionErrorThreshold(),
        minZoom: this.minZoom(),
        maxZoom: this.maxZoom(),
        tileGrid: this.effectiveTileGrid(),
        tileLoadFunction: this.tileLoadFunction(),
        tilePixelRatio: this.tilePixelRatio(),
        tileSize: this.tileSize(),
        tileUrlFunction: this.tileUrlFunction(),
        urls: this.urls(),
        wrapX: this.wrapX(),
      };

      if (!this.instance) {
        return;
      }

      // Same hazard as LayerComponent: setProperties() writes undefined
      // verbatim, clobbering OL's internal defaults (or a value set at
      // construction time) for any input left unbound in the template.
      const definedProperties: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(properties)) {
        if (value !== undefined) {
          definedProperties[key] = value;
        }
      }

      this.instance.setProperties(definedProperties, false);
    });

    // url changes require a full recreate (mirrors the old `changes['url']` check).
    effect(() => {
      const url = this.url();

      if (this.instance && url !== this.previousUrl) {
        this.previousUrl = url;
        this.init();
      }
    });

    this.destroyRef.onDestroy(() => unByKey(this.eventKeys));
  }

  ngAfterContentInit(): void {
    if (this.tileGridXYZ) {
      this.contentTileGrid.set(this.tileGridXYZ.instance);
    }

    this.previousUrl = this.url();
    this.init();
  }

  protected init(): void {
    unByKey(this.eventKeys);
    this.eventKeys = [];

    this.instance = new XYZ({
      cacheSize: this.cacheSize(),
      crossOrigin: this.crossOrigin(),
      projection: this.projection(),
      reprojectionErrorThreshold: this.reprojectionErrorThreshold(),
      minZoom: this.minZoom(),
      maxZoom: this.maxZoom(),
      tileGrid: this.effectiveTileGrid(),
      tileLoadFunction: this.tileLoadFunction(),
      tilePixelRatio: this.tilePixelRatio(),
      tileSize: this.tileSize(),
      tileUrlFunction: this.tileUrlFunction(),
      url: this.url(),
      urls: this.urls(),
      wrapX: this.wrapX(),
    });

    this.eventKeys.push(
      this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event)),
      this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event)),
      this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event))
    );

    this._register(this.instance);
  }
}
