import {
  Component, Host, Input, forwardRef, AfterContentInit, ContentChild, SimpleChanges,
  Inject
} from '@angular/core';
import {LayerTileComponent} from '../layers';
import {SourceComponent} from './source.component';
import {TileGridWMTSComponent} from '../tilegridwmts.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-source-tilewmts',
  template: `<ng-content></ng-content>`,
  providers: [
    {provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent)}
  ]
})
export class SourceTileWMTSComponent extends SourceComponent implements AfterContentInit {

  instance: ol.source.WMTS;
  @Input() cacheSize?: number;
  @Input() crossOrigin?: (string);
  @Input() logo?: (string | olx.LogoOptions);
  @Input() tileGrid: ol.tilegrid.WMTS;
  @Input() projection: ol.ProjectionLike;
  @Input() reprojectionErrorThreshold?: number;
  @Input() requestEncoding?: (ol.source.WMTSRequestEncoding | string);
  @Input() layer: string;
  @Input() style: string;
  @Input() tileClass?: ((n: ol.ImageTile, coords: ol.TileCoord, state: ol.Tile.State, s1: string, s2: string, type: ol.TileLoadFunctionType) => any);
  @Input() tilePixelRatio?: number;
  @Input() version?: string;
  @Input() format?: string;
  @Input() matrixSet: string;
  @Input() dimensions?: GlobalObject;
  @Input() url?: string;
  @Input() tileLoadFunction?: ol.TileLoadFunctionType;
  @Input() urls?: string[];
  @Input() wrapX?: boolean;

  @ContentChild(TileGridWMTSComponent) tileGridWMTS: TileGridWMTSComponent;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerTileComponent) {
    super(mapSystem, layer);
  }


  ngOnChanges(changes: SimpleChanges) {
    let properties: {[index: string]: any} = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
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
    this.instance = new this.mapSystem.source.WMTS(this);
    this.host.instance.setSource(this.instance);
  }

  ngAfterContentInit(): void {
    if (this.tileGridWMTS) {
      this.tileGrid = this.tileGridWMTS.instance;
      this.setLayerSource();
    }
  }
}
