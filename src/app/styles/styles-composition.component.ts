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
  StylesComponent,
  StyleComponent,
  StyleIconComponent,
  ViewComponent
} from 'ngx-openlayers';

@Component({
  selector: 'app-styles',
  imports: [
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
    StylesComponent,
    StyleComponent,
    StyleIconComponent,
    ViewComponent
  ],
  template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="12">
        <aol-coordinate [x]="-2.269282" [y]="46.987247" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-vector>
        <aol-source-vector >
          <aol-feature>
            <aol-geometry-point>
              <aol-coordinate [x]="marker.lon" [y]="marker.lat" srid="EPSG:4326"></aol-coordinate>
            </aol-geometry-point>
            <aol-styles>
              <aol-style [zIndex]="3">
                <aol-style-icon
                  src="assets/marker.svg"
                  [anchor]="[0.5, 1]"
                  anchorXUnits="fraction"
                  anchorYUnits="fraction"
                  [color]="[255, 0, 0]"
                  anchorOrigin="top-left"
                >
                </aol-style-icon>
              </aol-style>
              <aol-style [zIndex]="2">
                <aol-style-icon
                  src="assets/marker.svg"
                  [anchor]="[0.5, 1]"
                  [scale]="2"
                  anchorXUnits="fraction"
                  anchorYUnits="fraction"
                  [color]="[0, 0, 255]"
                  anchorOrigin="top-left"
                >
                </aol-style-icon>
              </aol-style>
              <aol-style [zIndex]="1">
                <aol-style-icon
                  src="assets/marker.svg"
                  [anchor]="[0.5, 1]"
                  [scale]="3"
                  anchorXUnits="fraction"
                  anchorYUnits="fraction"
                  [color]="[0, 255, 0]"
                  anchorOrigin="top-left"
                >
                </aol-style-icon>
              </aol-style>
            </aol-styles>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>
    </aol-map>
  `,
  styles: ``,
})
export class StylesCompositionComponent {
  marker = {
    lon: -2.264184,
    lat: 46.996207,
  };
}
