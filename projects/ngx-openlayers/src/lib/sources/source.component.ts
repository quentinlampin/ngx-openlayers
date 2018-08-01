import { Input, OnDestroy } from '@angular/core';
import { source } from 'openlayers';
import { LayerComponent } from '../layers/layer.component';
import AttributionLike = ol.AttributionLike;
import { SourceRasterComponent } from './raster.component';

export class SourceComponent implements OnDestroy {
  public instance: source.Source;
  public componentType = 'source';

  @Input()
  attributions: AttributionLike;

  constructor(protected host: LayerComponent, protected raster?: SourceRasterComponent) {}

  ngOnDestroy() {
    if (this.host) {
      this.host.instance.setSource(null);
    }

    if (this.raster) {
      this.raster.sources = [];
    }
  }

  protected _register(s: source.Source) {
    if (this.host) {
      this.host.instance.setSource(s);
    }

    if (this.raster) {
      this.raster.sources = [s];
    }
  }
}
