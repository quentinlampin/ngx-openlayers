import { Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import { LoadFunction } from 'ol/Tile';
import { BingMaps } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-bingmaps',
  template: ` <div class="aol-source-bingmaps"></div> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceBingmapsComponent) }],
  standalone: true,
})
export class SourceBingmapsComponent extends SourceComponent implements OnInit {
  @Input()
  cacheSize: number;
  @Input()
  hidpi: boolean;
  @Input()
  culture: string;
  @Input()
  key: string;
  @Input()
  imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey' = 'Aerial';
  @Input()
  maxZoom: number;
  @Input()
  reprojectionErrorThreshold: number;
  @Input()
  tileLoadFunction: LoadFunction;
  @Input()
  wrapX: boolean;
  @Input()
  placeholderTiles = false;

  instance: BingMaps;
  host = inject(LayerTileComponent, { host: true });

  ngOnInit(): void {
    this.instance = new BingMaps(this);
    this.host.instance.setSource(this.instance);
  }
}
