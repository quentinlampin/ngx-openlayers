import { Component, forwardRef, inject, input, OnInit } from '@angular/core';
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
  tileJSON = input<Config>();
  url = input<string>();

  instance?: UTFGrid;
  host = inject(LayerTileComponent);

  ngOnInit(): void {
    this.instance = new UTFGrid({
      tileJSON: this.tileJSON(),
      url: this.url(),
    });
    this.host.instance.setSource(this.instance);
  }
}
