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
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import WMTS, { Options as WMTSOptions } from 'ol/source/WMTS';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import WMTSRequestEncoding from 'ol/source/WMTSRequestEncoding';
import { ProjectionLike } from 'ol/proj';
import { LoadFunction } from 'ol/Tile';

@Component({
  selector: 'aol-source-tilewmts',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }],
})
export class SourceTileWMTSComponent extends SourceComponent implements AfterContentInit, OnChanges, WMTSOptions {
  instance: WMTS;
  @Input()
  cacheSize?: number;
  @Input()
  crossOrigin?: string;
  @Input()
  tileGrid: WMTSTileGrid;
  @Input()
  projection: ProjectionLike;
  @Input()
  reprojectionErrorThreshold?: number;
  @Input()
  requestEncoding?: WMTSRequestEncoding | string;
  @Input()
  layer: string;
  @Input()
  style: string;
  @Input()
  tileClass?: any;
  @Input()
  tilePixelRatio?: number;
  @Input()
  version?: string;
  @Input()
  format?: string;
  @Input()
  matrixSet: string;
  @Input()
  dimensions?: Object;
  @Input()
  url?: string;
  @Input()
  tileLoadFunction?: LoadFunction;
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
    this.instance = new WMTS(this);
    this.host.instance.setSource(this.instance);
  }

  ngAfterContentInit(): void {
    if (this.tileGridWMTS) {
      this.tileGrid = this.tileGridWMTS.instance;
      this.setLayerSource();
    }
  }
}
