import { Component, forwardRef, inject, Input, OnInit } from '@angular/core';
import { GeoTIFF } from 'ol/source';
import { LayerWebGlComponent } from '../layers/layerwebgl.component';
import { SourceComponent } from './source.component';
import { Options } from 'ol/source/GeoTIFF';

@Component({
  selector: 'aol-source-geotiff',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoTIFFComponent) }],
  standalone: true,
})
export class SourceGeoTIFFComponent extends SourceComponent implements OnInit {
  /**
   * List of information about GeoTIFF sources.
   * Multiple sources can be combined when their resolution sets are equal after applying a scale.
   * The list of sources defines a mapping between input bands as they are read from each GeoTIFF and
   * the output bands that are provided by data tiles. To control which bands to read from each GeoTIFF,
   * use the {@link import ("./GeoTIFF.js").SourceInfo bands} property. If, for example, you specify two
   * sources, one with 3 bands and {@link import ("./GeoTIFF.js").SourceInfo nodata} configured, and
   * another with 1 band, the resulting data tiles will have 5 bands: 3 from the first source, 1 alpha
   * band from the first source, and 1 band from the second source.
   */
  @Input() sources: Options['sources'];
  /**
   * Additional options to be passed to [geotiff.js](https://geotiffjs.github.io/geotiff.js/module-geotiff.html)'s `fromUrl` or `fromUrls` methods.
   */
  @Input() sourceOptions?: Options['sourceOptions'];
  /**
   * By default, bands from the sources are read as-is. When
   * reading GeoTIFFs with the purpose of displaying them as RGB images, setting this to `true` will
   * convert other color spaces (YCbCr, CMYK) to RGB.  Setting the option to `'auto'` will make it so CMYK, YCbCr,
   * CIELab, and ICCLab images will automatically be converted to RGB.
   */
  @Input() convertToRGB?: Options['convertToRGB'];
  /**
   * By default, the source data is normalized to values between
   * 0 and 1 with scaling factors based on the raster statistics or `min` and `max` properties of each source.
   * If instead you want to work with the raw values in a style expression, set this to `false`.  Setting this option
   * to `false` will make it so any `min` and `max` properties on sources are ignored.
   */
  @Input() normalize?: Options['normalize'];
  /**
   * Source projection.  If not provided, the GeoTIFF metadata
   * will be read for projection information.
   */
  @Input() projection?: Options['projection'];
  /**
   * Duration of the opacity transition for rendering.
   * To disable the opacity transition, pass `transition: 0`.
   */
  @Input() transition?: Options['transition'];
  /**
   * Render tiles beyond the tile grid extent.
   */
  @Input() wrapX?: Options['wrapX'];
  /**
   * Use interpolated values when resampling.  By default,
   * the linear interpolation is used to resample the data.  If false, nearest neighbor is used.
   */
  @Input() interpolate?: Options['interpolate'];

  instance?: GeoTIFF;
  readonly host = inject(LayerWebGlComponent);

  ngOnInit(): void {
    this.instance = new GeoTIFF(this);
    this.host.instance.setSource(this.instance);
  }
}
