import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { WMTS } from 'ol/source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { SourceComponent } from './source.component';
import { Options } from 'ol/source/WMTS';
import BaseObject from 'ol/Object';

@Component({
  selector: 'aol-source-tilewmts',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent) }],
  standalone: true,
})
export class SourceTileWMTSComponent extends SourceComponent implements AfterContentInit, OnChanges {
  @Input()
  cacheSize?: Options['cacheSize'];
  @Input()
  crossOrigin?: Options['crossOrigin'];
  @Input()
  tileGrid: Options['tileGrid'];
  @Input()
  projection: Options['projection'];
  @Input()
  reprojectionErrorThreshold?: Options['reprojectionErrorThreshold'];
  @Input()
  requestEncoding?: Options['requestEncoding'];
  @Input()
  layer: Options['layer'];
  @Input()
  style: Options['style'];
  @Input()
  tileClass?: Options['tileClass'];
  @Input()
  tilePixelRatio?: Options['tilePixelRatio'];
  @Input()
  version?: Options['version'];
  @Input()
  format?: Options['format'];
  @Input()
  matrixSet: Options['matrixSet'];
  @Input()
  dimensions?: Options['dimensions'];
  @Input()
  url?: Options['url'];
  @Input()
  tileLoadFunction?: Options['tileLoadFunction'];
  @Input()
  urls?: Options['urls'];
  @Input()
  wrapX?: Options['wrapX'];

  @Output()
  tileLoadStart: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadEnd: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();
  @Output()
  tileLoadError: EventEmitter<TileSourceEvent> = new EventEmitter<TileSourceEvent>();

  @ContentChild(TileGridWMTSComponent)
  tileGridWMTS: TileGridWMTSComponent;

  instance: WMTS;
  host = inject(LayerTileComponent, { host: true });

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    const properties: Parameters<BaseObject['setProperties']>[0] = {};
    for (const key in changes) {
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
    this.instance.setProperties(properties, false);
  }

  setLayerSource(): void {
    this.instance = new WMTS(this);
    this.instance.on('tileloadstart', (event: TileSourceEvent) => this.tileLoadStart.emit(event));
    this.instance.on('tileloadend', (event: TileSourceEvent) => this.tileLoadEnd.emit(event));
    this.instance.on('tileloaderror', (event: TileSourceEvent) => this.tileLoadError.emit(event));
    this.host.instance.setSource(this.instance);
  }

  ngAfterContentInit(): void {
    if (this.tileGridWMTS) {
      this.tileGrid = this.tileGridWMTS.instance;
      this.setLayerSource();
    }
  }
}
