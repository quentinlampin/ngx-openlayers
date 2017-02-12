import { Host, OnDestroy, OnInit } from '@angular/core';
import { LayerComponent } from '../layers';

export class SourceComponent implements OnInit, OnDestroy {
  public instance: any;
  public componentType: string = 'source';

  constructor(@Host() protected host: LayerComponent) {
  }

  ngOnInit() {
    this.host.instance.setSource(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.setSource(null);
  }
}
