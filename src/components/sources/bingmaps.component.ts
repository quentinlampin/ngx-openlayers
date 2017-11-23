import { Component, Host, Input, OnInit, forwardRef, Inject } from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-source-bingmaps',
  template: `<div class="aol-source-bingmaps"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }
  ]
})
export class SourceBingmapsComponent extends SourceComponent implements OnInit {
  instance: ol.source.BingMaps;

  @Input() cacheSize: number;
  @Input() hidpi: boolean;
  @Input() culture: string;
  @Input() key: string;
  @Input() imagerySet: 'Road'|'Aerial'|'AerialWithLabels'|'collinsBart'|'ordnanceSurvey' = 'Aerial';
  @Input() maxZoom: number;
  @Input() reprojectionErrorThreshold: number;
  @Input() tileLoadFunction: ol.TileLoadFunctionType;
  @Input() wrapX: boolean;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerTileComponent) {
    super(mapSystem, layer);
  }

  ngOnInit() {
    this.instance = new this.mapSystem.source.BingMaps(this);
    this.host.instance.setSource(this.instance);
  }
}
