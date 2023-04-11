import { Component } from '@angular/core';

@Component({
  selector: 'app-tile-json',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-view [zoom]="3">
        <aol-coordinate [x]="-2.269282" [y]="46.987247" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-layer-tile>
        <aol-source-tilejson url="https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json"></aol-source-tilejson>
      </aol-layer-tile>
    </aol-map>
  `,
})
export class TileJsonComponent {
  constructor() {}
}
