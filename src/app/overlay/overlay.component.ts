import { Component, OnInit } from '@angular/core';
import { Feature as OlFeature, format, geom } from 'openlayers';

@Component({
  selector: 'app-display-overlay',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="11">
        <aol-coordinate [x]="-2.269282" [y]="46.987247" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      <aol-layer-vector>
        <aol-source-vector>
          <aol-feature>
            <aol-geometry-polygon>
              <aol-collection-coordinates [coordinates]="feature.geometry.coordinates[0]" [srid]="'EPSG:4326'"></aol-collection-coordinates>
            </aol-geometry-polygon>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>

      <aol-overlay [positioning]="'center-center'" [stopEvent]="false">
        <aol-coordinate
          [x]="tooltip.lon"
          [y]="tooltip.lat"
          [srid]="'EPSG:4326'"
        >
        </aol-coordinate>
        <aol-content>
          <div class="tooltip tooltip-static">
            {{tooltip.text}}
          </div>
        </aol-content>
      </aol-overlay>
    </aol-map>
  `,
  styles: [
    `
      .tooltip {
        margin-top: 35%;
        right: 50%;
        position: relative;
        border-radius: 4px;
        color: white;
        padding: 4px 8px;
        white-space: nowrap;
      }

      .tooltip-static {
        background-color: #000000;
        color: white;
        border: 1px solid white;
      }
    `,
  ],
})
export class OverlayComponent implements OnInit {
  constructor() {}

  geoJsonFormat = new format.GeoJSON();

  feature = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-2.3565673828124996, 46.92588289494367],
          [-2.1148681640624996, 46.92588289494367],
          [-2.1148681640624996, 47.04954010021555],
          [-2.3565673828124996, 47.04954010021555],
          [-2.3565673828124996, 46.92588289494367],
        ],
      ],
    },
  };

  tooltip = {
    lon: 0,
    lat: 0,
    text: 'Lorem ipsum dolor sit amet',
  };

  ngOnInit() {
    const olFeature: OlFeature = this.geoJsonFormat.readFeature(this.feature);
    const olGeomPolygon = geom.Polygon.fromExtent(olFeature.getGeometry().getExtent());
    [, this.tooltip.lat, this.tooltip.lon] = olGeomPolygon.getExtent();
  }
}
