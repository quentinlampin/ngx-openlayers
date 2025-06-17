import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-view zoom="4"> <aol-coordinate [x]="-10997148" [y]="4569099"></aol-coordinate> </aol-view>
      <aol-layer-image>
        <aol-source-imagewms
          [url]="'https://ahocevar.com/geoserver/wms'"
          [params]="params"
          [serverType]="'geoserver'"
          (onImageLoadStart)="onImageLoadStart()"
          (onImageLoadEnd)="onImageLoadEnd()"
        ></aol-source-imagewms>
      </aol-layer-image>
    </aol-map>
  `,
  styles: [
    `
      map {
        background: #e0eced;
      }
    `,
  ],
})
export class ImageWMSComponent implements OnInit {
  constructor() {}

  params = { LAYERS: 'topp:states' };

  ngOnInit() {}

  onImageLoadStart() {
    console.log('image starts loading at: ' + new Date());
  }

  onImageLoadEnd() {
    console.log('image ends loading at: ' + new Date());
  }
}
