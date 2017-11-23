import { Component, Host, Input, forwardRef, ContentChild, AfterContentInit, Inject } from '@angular/core';
import { LayerVectorTileComponent } from '../layers';
import { FormatComponent } from '../formats';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-source-vectortile',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }
  ]
})
export class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
  public instance: ol.source.VectorTile;
  @Input() cacheSize: number;
  @Input() overlaps: boolean;
  @Input() projection: ol.ProjectionLike;
  @Input() tilePixelRatio: number;
  @Input() tileUrlFunction: ol.TileUrlFunctionType;
  @Input() url: string;
  @Input() urls: string[];
  @Input() wrapX: boolean;

  @ContentChild(FormatComponent) formatComponent: FormatComponent;
  format: ol.format.Feature;
  @ContentChild(TileGridComponent) tileGridComponent: TileGridComponent;
  tileGrid: ol.tilegrid.TileGrid;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerVectorTileComponent) {
    super(mapSystem, layer);
  }

  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new this.mapSystem.source.VectorTile(this);
    this.host.instance.setSource(this.instance);
  }
}
