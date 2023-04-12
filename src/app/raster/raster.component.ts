import { Component, ViewChild } from '@angular/core';
import { SourceRasterComponent } from 'ngx-openlayers';

interface RasterData {
  brightness: number;
  contrast: number;
}

@Component({
  selector: 'app-raster',
  template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-fullscreen></aol-control-fullscreen>

      <aol-view [zoom]="14">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-image>
        <aol-source-raster
          threads="4"
          operationType="image"
          [operation]="operation"
          (beforeOperations)="beforeOperations($event)"
        >
          <aol-source-osm *ngIf="selectLayer === 'osm'"></aol-source-osm>
          <aol-source-xyz
            *ngIf="selectLayer === 'xyz'"
            url="https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71"
            crossOrigin=""
          ></aol-source-xyz>
        </aol-source-raster>
      </aol-layer-image>
    </aol-map>

    <div class="controls">
      <form>
        <input type="radio" name="layer" value="osm" [(ngModel)]="selectLayer" />OSM<br />
        <input type="radio" name="layer" value="xyz" [(ngModel)]="selectLayer" />XYZ<br />
      </form>

      <div class="control">
        <span>Contrast : </span>
        <input type="range" min="-255" max="255" [(ngModel)]="contrast" (input)="updateRaster()" />
        <span> ({{ contrast }})</span>
      </div>
      <div class="control">
        <span>Brightness : </span>
        <input type="range" min="-255" max="255" [(ngModel)]="brightness" (input)="updateRaster()" />
        <span> ({{ brightness }})</span>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
      }

      aol-map {
        width: 70%;
      }

      .controls {
        width: 28%;
        padding: 1rem;
      }

      .control {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 20px;
      }
    `,
  ],
})
export class RasterComponent {
  @ViewChild(SourceRasterComponent, { static: true })
  rasterSource;

  operation = rasterOperation;
  brightness = 0;
  contrast = 0;
  selectLayer = 'osm';

  beforeOperations(event) {
    const data: RasterData = event.data;
    data.brightness = this.brightness;
    data.contrast = this.contrast;
  }

  updateRaster() {
    this.rasterSource.instance.refresh();
  }
}

/**
 * @see https://github.com/canastro/image-filter-brightness/blob/master/src/transform.js
 * @see https://github.com/canastro/image-filter-contrast/blob/master/src/transform.js
 */
const rasterOperation = (imageDatas: [ImageData], data: RasterData): ImageData => {
  const [imageData] = imageDatas;

  const pixels = imageData.data;
  const pixelsLength = pixels.length;
  const factor = (259 * (data.contrast + 255)) / (255 * (259 - data.contrast));

  for (let i = 0; i < pixelsLength; i += 4) {
    pixels[i] += data.brightness;
    pixels[i + 1] += data.brightness;
    pixels[i + 2] += data.brightness;

    pixels[i] = factor * (pixels[i] - 128) + 128;
    pixels[i + 1] = factor * (pixels[i + 1] - 128) + 128;
    pixels[i + 2] = factor * (pixels[i + 2] - 128) + 128;
  }

  return imageData;
};
