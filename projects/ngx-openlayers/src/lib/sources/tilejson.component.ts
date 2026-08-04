import { Component, forwardRef, inject, input, OnInit } from '@angular/core';
import { TileJSON } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-tilejson',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileJSONComponent) }],
  standalone: true,
})
export class SourceTileJSONComponent extends SourceComponent implements OnInit {
  url = input<string>();

  instance?: TileJSON;
  host = inject(LayerTileComponent);

  ngOnInit(): void {
    this.instance = new TileJSON({
      url: this.url(),
    });
    this.host.instance.setSource(this.instance);
  }
}
