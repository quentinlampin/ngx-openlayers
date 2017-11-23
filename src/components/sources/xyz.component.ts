import {
  Component, Host, Input, AfterContentInit, forwardRef, OnChanges, ContentChild, SimpleChanges,
  Inject
} from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
import { TileGridComponent } from '../tilegrid.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-source-xyz',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }
  ]
})
export class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
  instance: ol.source.XYZ;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() opaque: boolean;
  @Input() projection: string;
  @Input() reprojectionErrorThreshold: number;
  @Input() minZoom: number;
  @Input() maxZoom: number;
  @Input() tileGrid: ol.tilegrid.TileGrid;
  @Input() tileLoadFunction?: ol.TileLoadFunctionType;
  @Input() tilePixelRatio: number;
  @Input() tileSize: number|ol.Size;
  @Input() tileUrlFunction: ol.TileUrlFunctionType;
  @Input() url: string;
  @Input() urls: string[];
  @Input() wrapX: boolean;

  @ContentChild(TileGridComponent) tileGridXYZ: TileGridComponent;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerTileComponent) {
    super(mapSystem, layer);
  }

  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.instance = new this.mapSystem.source.XYZ(this);
    this.host.instance.setSource(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: {[index: string]: any} = {};

    if (!this.instance) {
      return;
    }
    for (let key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }

    this.instance.setProperties(properties, false);
    if (changes.hasOwnProperty('url')) {
      this.instance = new this.mapSystem.source.XYZ(this);
      this.host.instance.setSource(this.instance);
    }
  }
}
