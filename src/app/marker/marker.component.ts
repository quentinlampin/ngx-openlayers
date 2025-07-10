import { Component } from '@angular/core';
import {
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  FeatureComponent,
  GeometryPointComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  StyleComponent,
  StyleIconComponent,
  ViewComponent,
} from 'ngx-openlayers';

@Component({
  selector: 'app-display-marker',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="12">
        <aol-coordinate [x]="-2.269282" [y]="46.987247" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      @if (marker) {
        <aol-layer-vector>
          <aol-source-vector #markers>
            <aol-feature>
              <aol-geometry-point>
                <aol-coordinate [x]="marker.lon" [y]="marker.lat" [srid]="'EPSG:4326'"></aol-coordinate>
              </aol-geometry-point>
              <aol-style>
                <aol-style-icon
                  [src]="'assets/marker.svg'"
                  [anchor]="[0.5, 1]"
                  [anchorXUnits]="'fraction'"
                  [anchorYUnits]="'fraction'"
                  [scale]="2"
                  [anchorOrigin]="'top-left'"
                >
                </aol-style-icon>
              </aol-style>
            </aol-feature>
          </aol-source-vector>
        </aol-layer-vector>
      }
    </aol-map>
  `,
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    LayerVectorComponent,
    SourceVectorComponent,
    FeatureComponent,
    GeometryPointComponent,
    StyleComponent,
    StyleIconComponent,
  ],
})
export class MarkerComponent {
  marker = {
    lon: -2.264184,
    lat: 46.996207,
  };
}
