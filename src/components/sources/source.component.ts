import { Host, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { LayerComponent } from '../layers';
import AttributionLike = ol.AttributionLike;
import { MapSystemToken } from '../../map-system';

export class SourceComponent implements OnInit, OnDestroy {
  public instance: ol.source.Source;
  public componentType: string = 'source';

  @Input() attributions: AttributionLike;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() protected host: LayerComponent) {
  }

  ngOnInit() {
    this.host.instance.setSource(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.setSource(null);
  }
}
