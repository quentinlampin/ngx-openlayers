import { AfterContentInit, Component, ContentChild, Host, Input, forwardRef } from '@angular/core';
import { UrlFunction } from 'ol/Tile';
import Feature from 'ol/format/Feature';
import { ProjectionLike } from 'ol/proj';
import { VectorTile } from 'ol/source';
import TileGrid from 'ol/tilegrid/TileGrid';
import { FormatComponent } from '../formats/format.component';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-vectortile',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }],
})
export class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
  @Input()
  cacheSize: number;
  @Input()
  overlaps: boolean;
  @Input()
  projection: ProjectionLike;
  @Input()
  tilePixelRatio: number;
  @Input()
  tileUrlFunction: UrlFunction;
  @Input()
  url: string;
  @Input()
  urls: string[];
  @Input()
  wrapX: boolean;

  @ContentChild(FormatComponent)
  formatComponent: FormatComponent;
  @ContentChild(TileGridComponent)
  tileGridComponent: TileGridComponent;

  format: Feature;
  tileGrid: TileGrid;

  instance: VectorTile;

  constructor(@Host() layer: LayerVectorTileComponent) {
    super(layer);
  }

  /* need the children to construct the OL3 object */
  ngAfterContentInit() {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new VectorTile(this);
    this.host.instance.setSource(this.instance);
  }
}
