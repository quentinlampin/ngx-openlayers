import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { source, TileLoadFunctionType, tilegrid } from 'openlayers';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-tilewms',
  template: `<ng-content></ng-content>`,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent) }],
})
export class SourceTileWMSComponent extends SourceComponent implements OnInit {
  instance: source.TileWMS;
  @Input()
  cacheSize: number;
  @Input()
  crossOrigin: string;
  @Input()
  gutter: number;
  @Input()
  hidpi: boolean;
  @Input()
  params: Object;
  @Input()
  projection: string;
  @Input()
  reprojectionErrorThreshold: number;
  @Input()
  serverType: string;
  @Input()
  tileGrid: tilegrid.TileGrid;
  @Input()
  tileLoadFunction: TileLoadFunctionType;
  @Input()
  url: string;
  @Input()
  urls: string[];
  @Input()
  wrapX: boolean;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.TileWMS(this);
    this.host.instance.setSource(this.instance);
  }
}
