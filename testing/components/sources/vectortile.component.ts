import {Component, ContentChild, forwardRef, Host, Input} from '@angular/core';
import {format, ProjectionLike, source, tilegrid, TileUrlFunctionType} from 'openlayers';
import {LayerVectorTileComponent} from '../layers';
import {FormatComponent} from '../formats';
import {TileGridComponent} from '../tilegrid.component';
import {SourceComponent} from './source.component';

@Component({
  selector: 'aol-source-vectortile',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceVectorTileComponent) }
  ]
})
export class SourceVectorTileComponent extends SourceComponent{
  public instance: source.VectorTile;
  @Input() cacheSize: number;
  @Input() overlaps: boolean;
  @Input() projection: ProjectionLike;
  @Input() tilePixelRatio: number;
  @Input() tileUrlFunction: TileUrlFunctionType;
  @Input() url: string;
  @Input() urls: string[];
  @Input() wrapX: boolean;

  @ContentChild(FormatComponent) formatComponent: FormatComponent;
  format: format.Feature;
  @ContentChild(TileGridComponent) tileGridComponent: TileGridComponent;
  tileGrid: tilegrid.TileGrid;

  constructor(@Host() layer: LayerVectorTileComponent) {
    super(layer);
  }
}
