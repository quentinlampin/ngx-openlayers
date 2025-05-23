import { AfterContentInit, Component, ContentChild, forwardRef, Host, Input } from '@angular/core';
import { UrlFunction } from 'ol/Tile';
import FeatureFormat, { FeatureToFeatureClass } from 'ol/format/Feature';
import { ProjectionLike } from 'ol/proj';
import { VectorTile } from 'ol/source';
import TileGrid from 'ol/tilegrid/TileGrid';
import { FormatComponent } from '../formats/format.component';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { FeatureLike } from 'ol/Feature';

@Component({
  selector: 'aol-source-vectortile',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }],
  standalone: true,
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

  format: FeatureFormat<FeatureToFeatureClass<FeatureLike>>;
  tileGrid: TileGrid;

  instance: VectorTile<FeatureLike>;

  constructor(@Host() layer: LayerVectorTileComponent) {
    super(layer);
  }

  /* need the children to construct the OL3 object */
  ngAfterContentInit(): void {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;
    // console.log('creating ol.source.VectorTile instance with:', this);
    this.instance = new VectorTile(this);
    this.host.instance.setSource(this.instance);
  }
}
