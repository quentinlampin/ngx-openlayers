import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { source } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-tileutfgrid',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceTileUTFGridComponent) }
  ]
})
export class SourceTileUTFGridComponent extends SourceComponent implements OnInit {
  instance: source.TileUTFGrid;
  @Input() tileJSON: JSON;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.TileUTFGrid(this);
    this.host.instance.setSource(this.instance);
  }
}
