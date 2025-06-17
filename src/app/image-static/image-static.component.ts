import { Component } from '@angular/core';
import { Extent } from 'ol/extent';
import Projection from 'ol/proj/Projection';

@Component({
  selector: 'app-root',
  template: `
    <aol-map [width]="'100%'" [height]="'100%'">
      <aol-view [projection]="projection" [zoom]="2" [center]="[512, 484]"> </aol-view>
      <aol-layer-image [opacity]="opacity" [extent]="extent">
        <aol-source-imagestatic
          [url]="'https://imgs.xkcd.com/comics/online_communities.png'"
          [projection]="projection"
          [imageExtent]="extent"
        >
        </aol-source-imagestatic>
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
export class ImageStaticComponent {
  public zoom = 5;
  public opacity = 1.0;
  extent: Extent = [0, 0, 1024, 968];

  po = {
    code: 'xkcd-image',
    units: 'pixels',
    extent: [0, 0, 1024, 968],
  };

  projection = new Projection(this.po);

  getCenter = ext => Extent.getCenter(ext);
}
