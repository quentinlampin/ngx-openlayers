import {AfterContentInit, Host, Input, OnDestroy, OnInit, Optional} from '@angular/core';
import { source } from 'openlayers';
import { LayerComponent } from '../layers';
import AttributionLike = ol.AttributionLike;
import { SourceRasterComponent } from './raster.component';

export class SourceComponent implements OnDestroy {
  public instance: source.Source;
  public componentType: string = 'source';

  @Input() attributions: AttributionLike;

  constructor(protected host: LayerComponent, protected raster?: SourceRasterComponent) {
  }

  ngOnDestroy() {
    if (this.host) {
      this.host.instance.setSource(null);
    }

    if (this.raster) {
      this.raster.sources = [];
    }
  }

  protected _register(source: source.Source) {
    if (this.host) {
      this.host.instance.setSource(source);
    }

    if (this.raster) {
      this.raster.sources = [source];
    }
  }
}
