import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { source } from 'openlayers';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-tilejson',
  template: `<ng-content></ng-content>`,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent) }],
})
export class SourceTileJSONComponent extends SourceComponent implements OnInit {
  instance: source.TileJSON;

  @Input()
  url: string;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.TileJSON(this);
    this.host.instance.setSource(this.instance);
  }
}
