import { Component, Host, Input, OnChanges, OnInit, forwardRef, SimpleChanges } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileWMS } from 'ol/source';
import { TileGrid } from 'ol/tilegrid';
import { LoadFunction } from 'ol/Tile';

@Component({
  selector: 'aol-source-tilewms',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent) }],
})
export class SourceTileWMSComponent extends SourceComponent implements OnChanges, OnInit {
  @Input()
  cacheSize: number;
  @Input()
  crossOrigin: string;
  @Input()
  gutter: number;
  @Input()
  hidpi: boolean;
  @Input()
  params: { [key: string]: any };
  @Input()
  projection: string;
  @Input()
  reprojectionErrorThreshold: number;
  @Input()
  serverType: string;
  @Input()
  tileGrid: TileGrid;
  @Input()
  tileLoadFunction: LoadFunction;
  @Input()
  url: string;
  @Input()
  urls: string[];
  @Input()
  wrapX: boolean;

  instance: TileWMS;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new TileWMS(this);
    this.host.instance.setSource(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.instance && changes.hasOwnProperty('params')) {
      this.instance.updateParams(this.params);
    }
  }
}
