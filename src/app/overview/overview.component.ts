import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-overviewmap></aol-control-overviewmap>
      <aol-view #view [zoom]="zoom">
        <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>
      <aol-layer-tile #osm [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
    </aol-map>
  `,
})
export class OverviewComponent {
  public zoom = 15;
}
