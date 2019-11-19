import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import TileJSON, { Options as TileJSONOptions } from 'ol/source/TileJSON';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-tilejson',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent) }],
})
export class SourceTileJSONComponent extends SourceComponent implements OnInit, TileJSONOptions {
  instance: TileJSON;

  @Input()
  url: string;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new TileJSON(this);
    this.host.instance.setSource(this.instance);
  }
}
