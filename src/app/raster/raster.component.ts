import { Component, ViewChild } from '@angular/core';
import { SourceRasterComponent } from 'ngx-openlayers';

interface RasterData {
  brightness: number;
  contrast: number;
}

@Component({
  selector: 'app-raster',
  template: `
    <aol-map [width]="'100%'" [height]="'100%'">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-fullscreen></aol-control-fullscreen>

      <aol-view [zoom]="14">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-image *ngIf="selectLayer === 'osm'">
        <aol-source-raster #raster1
                           [operation]="operation"
                           [threads]="threads"
                           [lib]="lib"
                           [operationType]="operationType"
                           (beforeOperations)="beforeOperations($event)"
                           (afterOperations)="afterOperations($event)">
          <aol-source-osm></aol-source-osm>
        </aol-source-raster>
      </aol-layer-image>

      <aol-layer-image *ngIf="selectLayer === 'xyz'">
        <aol-source-raster #raster2
                           [operation]="operation"
                           [threads]="threads"
                           [lib]="lib"
                           [operationType]="operationType"
                           (beforeOperations)="beforeOperations($event)"
                           (afterOperations)="afterOperations($event)">
          <aol-source-xyz
            url="https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71"
            crossOrigin="">
          </aol-source-xyz>
        </aol-source-raster>
      </aol-layer-image>

    </aol-map>

    <div class="controls">
      <form>
        <input type="radio" name="layer" value="osm" [(ngModel)]="selectLayer">OSM<br>
        <input type="radio" name="layer" value="xyz" [(ngModel)]="selectLayer">XYZ<br>
      </form>

      <div class="control">
        <span>Contrast : </span>
        <input type="range" min="-255" max="255"
               [(ngModel)]="contrast"
               (input)="updateRaster()" />
        <span> ({{ contrast }})</span>
      </div>
      <div class="control">
        <span>Brightness : </span>
        <input type="range" min="-255" max="255"
               [(ngModel)]="brightness"
               (input)="updateRaster()" />
        <span> ({{ brightness }})</span>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
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
  threads = 4;
  operationType = 'image';
  lib: any = {
    brightness: brightness,
    contrast: contrast,
  };
  brightness = 0;
  contrast = 0;

  selectLayer = 'osm';
  @ViewChild(SourceRasterComponent)
  currentRasterSource;

  beforeOperations(event) {
    const data: RasterData = event.data;
    data.brightness = this.brightness;
    data.contrast = this.contrast;
  }

  operation(imageDatas: [ImageData], data: RasterData) {
    let [imageData] = imageDatas;
    imageData = brightness(imageData, data.brightness);
    imageData = contrast(imageData, data.contrast);
    return imageData;
  }

  afterOperations() {}

  updateRaster() {
    this.currentRasterSource.instance.changed();
  }
}

/**
 * @see https://github.com/canastro/image-filter-brightness/blob/master/src/transform.js
 */
function brightness(imageData: ImageData, adjustment: number) {
  const pixels = imageData.data,
    pixelsLength = pixels.length;

  for (let i = 0; i < pixelsLength; i += 4) {
    pixels[i] += adjustment;
    pixels[i + 1] += adjustment;
    pixels[i + 2] += adjustment;
  }
  return imageData;
}

/**
 * @see https://github.com/canastro/image-filter-contrast/blob/master/src/transform.js
 */
function contrast(imageData: ImageData, adjustment: number) {
  const pixels = imageData.data,
    factor = (259 * (adjustment + 255)) / (255 * (259 - adjustment)),
    pixelsLength = pixels.length;

  for (let i = 0; i < pixelsLength; i += 4) {
    pixels[i] = factor * (pixels[i] - 128) + 128;
    pixels[i + 1] = factor * (pixels[i + 1] - 128) + 128;
    pixels[i + 2] = factor * (pixels[i + 2] - 128) + 128;
  }

  return imageData;
}
