import { Component, Host, Input, AfterContentInit, forwardRef, OnChanges, ContentChild, SimpleChanges } from '@angular/core';
import { source, Size, TileUrlFunctionType, TileLoadFunctionType, tilegrid } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
import { TileGridComponent } from '../tilegrid.component';

@Component({
  selector: 'aol-source-xyz',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }
  ]
})
export class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
  instance: source.XYZ;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() opaque: boolean;
  @Input() projection: string;
  @Input() reprojectionErrorThreshold: number;
  @Input() minZoom: number;
  @Input() maxZoom: number;
  @Input() tileGrid: tilegrid.TileGrid;
  @Input() tileLoadFunction?: TileLoadFunctionType;
  @Input() tilePixelRatio: number;
  @Input() tileSize: number|Size;
  @Input() tileUrlFunction: TileUrlFunctionType;
  @Input() url: string;
  @Input() urls: string[];
  @Input() wrapX: boolean;

  @ContentChild(TileGridComponent) tileGridXYZ: TileGridComponent;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngAfterContentInit() {
    if (this.tileGridXYZ) {
      this.tileGrid = this.tileGridXYZ.instance;
    }
    this.instance = new source.XYZ(this);
    this.host.instance.setSource(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
