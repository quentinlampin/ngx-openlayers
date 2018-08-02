import {
  Component,
  Host,
  Input,
  forwardRef,
  AfterContentInit,
  ContentChild,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { TileLoadFunctionType, tilegrid, ProjectionLike, source, ImageTile, TileCoord, Tile } from 'openlayers';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';

@Component({
  selector: 'aol-source-tilewmts',
  template: `<ng-content></ng-content>`,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }],
})
export class SourceTileWMTSComponent extends SourceComponent implements AfterContentInit, OnChanges {
  instance: source.WMTS;
  @Input()
  cacheSize?: number;
  @Input()
  crossOrigin?: string;
  @Input()
  logo?: string | olx.LogoOptions;
  @Input()
  tileGrid: tilegrid.WMTS;
  @Input()
  projection: ProjectionLike;
  @Input()
  reprojectionErrorThreshold?: number;
  @Input()
  requestEncoding?: source.WMTSRequestEncoding | string;
  @Input()
  layer: string;
  @Input()
  style: string;
  @Input()
  tileClass?: ((
    n: ImageTile,
    coords: TileCoord,
    state: Tile.State,
    s1: string,
    s2: string,
    type: TileLoadFunctionType
  ) => any);
  @Input()
  tilePixelRatio?: number;
  @Input()
  version?: string;
  @Input()
  format?: string;
  @Input()
  matrixSet: string;
  @Input()
  dimensions?: GlobalObject;
  @Input()
  url?: string;
  @Input()
  tileLoadFunction?: TileLoadFunctionType;
  @Input()
  urls?: string[];
  @Input()
  wrapX?: boolean;

  @ContentChild(TileGridWMTSComponent)
  tileGridWMTS: TileGridWMTSComponent;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        switch (key) {
          case 'url':
            this.url = changes[key].currentValue;
            this.setLayerSource();
            break;
          default:
            break;
        }
        properties[key] = changes[key].currentValue;
      }
    }
    this.instance.setProperties(properties, false);
  }

  setLayerSource(): void {
    this.instance = new source.WMTS(this);
    this.host.instance.setSource(this.instance);
  }

  ngAfterContentInit(): void {
    if (this.tileGridWMTS) {
      this.tileGrid = this.tileGridWMTS.instance;
      this.setLayerSource();
    }
  }
}
