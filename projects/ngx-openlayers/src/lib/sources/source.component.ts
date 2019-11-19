import { Input, OnDestroy } from '@angular/core';
import Source from 'ol/source/Source';
import { LayerComponent } from '../layers/layer.component';
import { SourceRasterComponent } from './raster.component';

export class SourceComponent implements OnDestroy {
  public instance: Source;
  public componentType = 'source';

  @Input()
  attributions: any;

  constructor(protected host: LayerComponent, protected raster?: SourceRasterComponent) {}

  ngOnDestroy() {
    if (this.host && this.host.instance) {
      this.host.instance.setSource(null);
    }

    if (this.raster) {
      this.raster.sources = [];
    }
  }

  protected _register(s: Source) {
    if (this.host) {
      this.host.instance.setSource(s);
    }

    if (this.raster) {
      this.raster.sources = [s];
      this.raster.init();
    }
  }
}
