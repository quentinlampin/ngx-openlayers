import { Directive, Input, OnDestroy } from '@angular/core';
import { Source } from 'ol';

import { LayerComponent } from '../layers/layer.component';

@Directive()
export abstract class SourceComponent implements OnDestroy {
  @Input()
  attributions: any;

  public instance: Source;
  public componentType = 'source';

  constructor(protected host: LayerComponent) {}

  ngOnDestroy() {
    if (this.host && this.host.instance) {
      this.host.instance.setSource(null);
    }
  }

  protected _register(s: Source) {
    if (this.host) {
      this.host.instance.setSource(s);
    }
  }
}
