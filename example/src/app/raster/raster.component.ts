import { Component } from '@angular/core';

interface RasterData {
  brightness: number;
  contrast: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './raster.component.html',
  styleUrls: ['./raster.component.css'],
})
export class RasterComponent {
  threads = 4;
  operationType = 'image';
  lib: any = {
    brightness: brightness,
    contrast: contrast
  };
  brightness = 0;
  contrast = 0;

  selectLayer = 'osm';

  beforeOperations(event) {
    let data: RasterData = event.data;
    data.brightness = this.brightness;
    data.contrast = this.contrast;
  }

  operation(imageDatas: [ImageData], data: RasterData) {
    let [imageData] = imageDatas;
    imageData = brightness(imageData, data.brightness);
    imageData = contrast(imageData, data.contrast);
    return imageData;
  }

  afterOperations() { }
}

/**
 * @see https://github.com/canastro/image-filter-brightness/blob/master/src/transform.js
 */
function brightness(imageData: ImageData, adjustment: number) {
  const pixels = imageData.data,
    pixelsLength =  pixels.length;

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
