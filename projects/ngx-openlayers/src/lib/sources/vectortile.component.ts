import { Component, Host, Input, forwardRef, ContentChild, AfterContentInit } from '@angular/core';
import { source, ProjectionLike, TileUrlFunctionType, format, tilegrid } from 'openlayers';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-vectortile',
  template: `<ng-content></ng-content>`,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }],
})
export class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
  public instance: source.VectorTile;
  @Input()
  cacheSize: number;
  @Input()
  overlaps: boolean;
  @Input()
  projection: ProjectionLike;
  @Input()
  tilePixelRatio: number;
  @Input()
  tileUrlFunction: TileUrlFunctionType;
  @Input()
  url: string;
  @Input()
  urls: string[];
  @Input()
  wrapX: boolean;

  @ContentChild(FormatComponent)
  formatComponent: FormatComponent;
  format: format.Feature;
  @ContentChild(TileGridComponent)
  tileGridComponent: TileGridComponent;
  tileGrid: tilegrid.TileGrid;

  constructor(@Host() layer: LayerVectorTileComponent) {
    super(layer);
  }

  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new source.VectorTile(this);
    this.host.instance.setSource(this.instance);
  }
}
