import { Directive, Input, OnDestroy } from '@angular/core';

import { Source } from 'ol/source';
import { LayerComponent } from '../layers/layer.component';
import { AttributionLike } from 'ol/source/Source';

@Directive()
export abstract class SourceComponent implements OnDestroy {
  @Input()
  attributions: AttributionLike;

  public instance: Source;
  public componentType = 'source';

  constructor(protected host: LayerComponent) {}

  ngOnDestroy(): void {
    if (this.host && this.host.instance) {
      this.host.instance.setSource(null);
    }
  }

  protected _register(s: Source): void {
    if (this.host) {
      this.host.instance.setSource(s);
    }
  }
}
