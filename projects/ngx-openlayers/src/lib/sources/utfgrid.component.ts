import { Component, forwardRef, Host, Input, OnInit } from '@angular/core';
import { UTFGrid } from 'ol/source';
import { Config } from 'ol/source/TileJSON';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
    selector: 'aol-source-utfgrid',
    template: ` <ng-content></ng-content> `,
    providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceUTFGridComponent) }],
    standalone: true,
})
export class SourceUTFGridComponent extends SourceComponent implements OnInit {
  @Input() tileJSON: Config;
  @Input() url: string;

  instance: UTFGrid;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new UTFGrid(this);
    this.host.instance.setSource(this.instance);
  }
}
