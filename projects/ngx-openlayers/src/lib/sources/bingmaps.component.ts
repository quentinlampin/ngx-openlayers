import { Component, forwardRef, inject, input, OnInit } from '@angular/core';
import { LoadFunction } from 'ol/Tile';
import { BingMaps } from 'ol/source';

import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-bingmaps',
  template: ` <div class="aol-source-bingmaps"></div> `,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceBingmapsComponent),
    },
  ],
  standalone: true,
})
export class SourceBingmapsComponent extends SourceComponent implements OnInit {
  cacheSize = input<number>();
  hidpi = input<boolean>();
  culture = input<string>();
  key = input.required<string>();
  imagerySet = input<'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey'>('Aerial');
  maxZoom = input<number>();

  reprojectionErrorThreshold = input<number>();
  tileLoadFunction = input<LoadFunction>();
  wrapX = input<boolean>();
  placeholderTiles = false;

  instance?: BingMaps;

  host = inject(LayerTileComponent);

  ngOnInit(): void {
    this.instance = new BingMaps({
      cacheSize: this.cacheSize(),
      hidpi: this.hidpi(),
      culture: this.culture(),
      key: this.key(),
      imagerySet: this.imagerySet(),
      maxZoom: this.maxZoom(),
      reprojectionErrorThreshold: this.reprojectionErrorThreshold(),
      tileLoadFunction: this.tileLoadFunction(),
      wrapX: this.wrapX(),
      placeholderTiles: this.placeholderTiles,
    });

    this.host.instance?.setSource(this.instance);
  }
}
