import { Component, forwardRef, Host, Input, OnInit } from '@angular/core';
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
  @Input()
  url: string;

  instance: TileJSON;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new TileJSON(this);
    this.host.instance.setSource(this.instance);
  }
}
