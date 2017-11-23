import { Component, Host, Input, OnInit, forwardRef, Inject } from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-source-tilewms',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent) }
  ]
})
export class SourceTileWMSComponent extends SourceComponent implements OnInit {
  instance: ol.source.TileWMS;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() gutter: number;
  @Input() hidpi: boolean;
  @Input() params: Object;
  @Input() projection: string;
  @Input() reprojectionErrorThreshold: number;
  @Input() serverType: string;
  @Input() tileGrid: ol.tilegrid.TileGrid;
  @Input() tileLoadFunction: ol.TileLoadFunctionType;
  @Input() url: string;
  @Input() urls: string[];
  @Input() wrapX: boolean;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerTileComponent) {
    super(mapSystem, layer);
  }

  ngOnInit() {
    this.instance = new this.mapSystem.source.TileWMS(this);
    this.host.instance.setSource(this.instance);
  }
}
