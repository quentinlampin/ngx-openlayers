import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <aol-map>
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-fullscreen></aol-control-fullscreen>
      <aol-view [zoom]="zoom"> <aol-coordinate [x]="-10997148" [y]="4569099"></aol-coordinate> </aol-view>
      <aol-layer-tile> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-image>
        <aol-source-imagearcgisrest
          projection="EPSG:3857"
          url="https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"
        ></aol-source-imagearcgisrest>
      </aol-layer-image>
    </aol-map>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      aol-map {
        width: 70%;
        height: 100%;
      }
    `,
  ],
})
export class ArcgisImageComponent {
  public zoom = 4;
  public opacity = 1.0;
}
