import { Component } from '@angular/core';
import {
  CoordinateComponent,
  DefaultInteractionComponent,
  MapComponent,
  ViewComponent,
  LayerWebGlComponent,
  SourceGeoTIFFComponent,
  LayerGroupComponent,
  LayerTileComponent,
  SourceOsmComponent,
} from 'ngx-openlayers';

@Component({
  selector: 'app-root',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-view [zoom]="10"><aol-coordinate [x]="33.514" [y]="16.685" srid="EPSG:4326"></aol-coordinate> </aol-view>
      <aol-layer-group>
        <aol-layer-tile [opacity]="1"><aol-source-osm></aol-source-osm></aol-layer-tile>
        <aol-layer-webgl>
          <aol-source-geotiff
            [sources]="[
              {
                url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif',
              },
            ]"
          >
          </aol-source-geotiff>
        </aol-layer-webgl>
      </aol-layer-group>
    </aol-map>
  `,
  styles: [
    `
      map {
        background: #e0eced;
      }
    `,
  ],
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerGroupComponent,
    LayerTileComponent,
    SourceOsmComponent,
    LayerWebGlComponent,
    SourceGeoTIFFComponent,
  ],
})
export class WebGlGeoTiffComponent {}
