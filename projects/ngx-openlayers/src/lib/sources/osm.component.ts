import { Component, forwardRef } from '@angular/core';
import { OSM } from 'ol/source';
import { AttributionLike } from 'ol/source/Source';
import { input } from '@angular/core';

import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
import { unByKey } from 'ol/Observable';

@Component({
  selector: 'aol-source-osm',
  template: `<div class="aol-source-osm"></div>`,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceOsmComponent),
    },
  ],
  standalone: true,
})
export class SourceOsmComponent extends SourceXYZComponent {
  attributions = input<AttributionLike>();

  override instance?: OSM;

  protected override init(): void {
    unByKey(this.eventKeys);
    this.eventKeys = [];

    this.instance = new OSM({
      attributions: this.attributions(),
      cacheSize: this.cacheSize(),
      crossOrigin: this.crossOrigin(),
      maxZoom: this.maxZoom(),
      reprojectionErrorThreshold: this.reprojectionErrorThreshold(),
      tileLoadFunction: this.tileLoadFunction(),
      url: this.url(),
      wrapX: this.wrapX(),
    });

    this.eventKeys.push(
      this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event)),
      this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event)),
      this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event))
    );

    this._register(this.instance);
  }
}
