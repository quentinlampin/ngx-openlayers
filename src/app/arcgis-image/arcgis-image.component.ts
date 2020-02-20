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
          [ratio]="1"
          url="https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"
          (imageLoadStart)="imageLoadStart()"
          (imageLoadEnd)="imageLoadEnd()"
        ></aol-source-imagearcgisrest>
      </aol-layer-image>
    </aol-map>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
      }

      aol-map {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class ArcgisImageComponent {
  public zoom = 4;
  public opacity = 1.0;

  imageLoadStart() {
    console.log('image starts loading at: ' + new Date());
  }

  imageLoadEnd() {
    console.log('image ends loading at: ' + new Date());
  }
}
