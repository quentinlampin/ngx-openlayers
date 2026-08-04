import { AfterContentInit, Component, ContentChild, forwardRef, inject, input } from '@angular/core';
import { UrlFunction } from 'ol/Tile';
import FeatureFormat from 'ol/format/Feature';
import { ProjectionLike } from 'ol/proj';
import { VectorTile } from 'ol/source';
import TileGrid from 'ol/tilegrid/TileGrid';
import { FormatComponent } from '../formats/format.component';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { FeatureLike } from 'ol/Feature';
import RenderFeature from 'ol/render/Feature';

@Component({
  selector: 'aol-source-vectortile',
  template: ` <ng-content></ng-content> `,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceVectorTileComponent),
    },
  ],
  standalone: true,
})
export class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
  cacheSize = input<number>();
  overlaps = input<boolean>();
  projection = input<ProjectionLike>();
  tileUrlFunction = input<UrlFunction>();
  url = input<string>();
  urls = input<string[]>();
  wrapX = input<boolean>();

  @ContentChild(FormatComponent)
  formatComponent!: FormatComponent;
  @ContentChild(TileGridComponent)
  tileGridComponent!: TileGridComponent;

  format?: FeatureFormat<RenderFeature>;
  tileGrid?: TileGrid;

  instance?: VectorTile<FeatureLike>;
  host = inject(LayerVectorTileComponent);

  ngAfterContentInit(): void {
    this.format = this.formatComponent.instance;
    this.tileGrid = this.tileGridComponent.instance;

    this.instance = new VectorTile<FeatureLike>({
      cacheSize: this.cacheSize(),
      overlaps: this.overlaps(),
      projection: this.projection(),
      tileUrlFunction: this.tileUrlFunction(),
      url: this.url(),
      urls: this.urls(),
      wrapX: this.wrapX(),
      format: this.format,
      tileGrid: this.tileGrid,
    });

    this.host.instance.setSource(this.instance);
  }
}
