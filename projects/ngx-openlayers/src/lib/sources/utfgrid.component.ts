import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import UTFGrid, { Options as UTFGridOptions } from 'ol/source/UTFGrid';
import { Config as TileJSONConfig } from 'ol/source/TileJSON';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';

@Component({
  selector: 'aol-source-utfgrid',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }],
})
export class SourceUTFGridComponent extends SourceComponent implements OnInit, UTFGridOptions {
  instance: UTFGrid;
  @Input() tileJSON: TileJSONConfig;
  @Input() url: string;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new UTFGrid(this);
    this.host.instance.setSource(this.instance);
  }
}
