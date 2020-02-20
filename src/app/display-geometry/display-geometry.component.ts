import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-geometry',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="6"> <aol-coordinate [x]="1" [y]="46.292896" [srid]="'EPSG:4326'"></aol-coordinate> </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-group>
        <aol-layer-vector *ngFor="let feature of features" [ngSwitch]="feature.geometry.type">
          <aol-source-vector *ngSwitchCase="'Polygon'">
            <aol-style>
              <aol-style-stroke [color]="'rgba(90, 17, 26)'" width="3"></aol-style-stroke>
              <aol-style-fill [color]="'rgba(90, 17, 26, 0.5)'"></aol-style-fill>
            </aol-style>
            <aol-feature>
              <aol-geometry-polygon>
                <aol-collection-coordinates [coordinates]="feature.geometry.coordinates" [srid]="'EPSG:4326'">
                </aol-collection-coordinates>
              </aol-geometry-polygon>
            </aol-feature>
          </aol-source-vector>

          <aol-source-vector *ngSwitchCase="'Point'">
            <aol-feature>
              <aol-geometry-point>
                <aol-coordinate
                  [x]="feature.geometry.coordinates[0]"
                  [y]="feature.geometry.coordinates[1]"
                  [srid]="'EPSG:4326'"
                >
                </aol-coordinate>
                <aol-style>
                  <aol-style-circle [radius]="10">
                    <aol-style-stroke [color]="'black'" [width]="5"></aol-style-stroke>
                    <aol-style-fill [color]="'green'"></aol-style-fill>
                  </aol-style-circle>
                </aol-style>
              </aol-geometry-point>
            </aol-feature>
          </aol-source-vector>

          <aol-source-vector *ngSwitchCase="'LineString'">
            <aol-feature>
              <aol-geometry-linestring>
                <aol-collection-coordinates [coordinates]="feature.geometry.coordinates" [srid]="'EPSG:4326'">
                </aol-collection-coordinates>
              </aol-geometry-linestring>
            </aol-feature>
          </aol-source-vector>

          <aol-source-vector *ngSwitchCase="'Circle'">
            <aol-feature>
              <aol-geometry-circle [radius]="feature.geometry.radius">
                <aol-coordinate
                  [x]="feature.geometry.coordinates[0]"
                  [y]="feature.geometry.coordinates[1]"
                  srid="EPSG:4326"
                >
                </aol-coordinate>
                <aol-style>
                  <aol-style-stroke color="blue" width="2"></aol-style-stroke>
                  <aol-style-fill color="rgba(255, 255, 0, 0.5)"></aol-style-fill>
                </aol-style>
              </aol-geometry-circle>
            </aol-feature>
          </aol-source-vector>

          <aol-source-vector *ngSwitchCase="'MultiPoint'">
            <aol-feature>
              <aol-geometry-multipoint>
                <aol-collection-coordinates [coordinates]="feature.geometry.coordinates" [srid]="'EPSG:4326'">
                </aol-collection-coordinates>
                <aol-style>
                  <aol-style-circle [radius]="5">
                    <aol-style-stroke [color]="'black'" [width]="5"></aol-style-stroke>
                    <aol-style-fill [color]="'green'"></aol-style-fill>
                  </aol-style-circle>
                </aol-style>
              </aol-geometry-multipoint>
            </aol-feature>
          </aol-source-vector>

          <aol-source-vector *ngSwitchCase="'MultiLineString'">
            <aol-feature>
              <aol-geometry-multilinestring>
                <aol-collection-coordinates [coordinates]="feature.geometry.coordinates" [srid]="'EPSG:4326'">
                </aol-collection-coordinates>
              </aol-geometry-multilinestring>
            </aol-feature>
          </aol-source-vector>

          <aol-source-vector *ngSwitchCase="'MultiPolygon'">
            <aol-style>
              <aol-style-stroke [color]="'rgba(81, 15.3, 23.4)'" width="2"></aol-style-stroke>
              <aol-style-fill [color]="'rgba(81, 15.3, 23.4, 0.4)'"></aol-style-fill>
            </aol-style>
            <aol-feature>
              <aol-geometry-multipolygon>
                <aol-collection-coordinates [coordinates]="feature.geometry.coordinates" [srid]="'EPSG:4326'">
                </aol-collection-coordinates>
              </aol-geometry-multipolygon>
            </aol-feature>
          </aol-source-vector>
        </aol-layer-vector>
      </aol-layer-group>
    </aol-map>
  `,
})
export class DisplayGeometryComponent implements OnInit {
  constructor() {}

  features = [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-1.131591796875, 47.03269459852135],
            [0.98876953125, 47.03269459852135],
            [0.98876953125, 48.356249029540734],
            [-1.131591796875, 48.356249029540734],
            [-1.131591796875, 47.03269459852135],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [2.8125, 49.61782831211117],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [
          [1.856689453125, 49.102645497788814],
          [5.009765625, 48.95858066440977],
          [6.1083984375, 47.96785877999251],
          [6.85546875, 48.71271258145237],
          [5.064697265625, 49.62494564650146],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Circle',
        coordinates: [3.1060516834259033, 45.78940226200967],
        radius: 50000,
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'MultiPoint',
        coordinates: [
          [0, 45],
          [0.5, 45],
          [1, 45],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'MultiLineString',
        coordinates: [
          [
            [0, 44],
            [1, 44],
            [2, 44.5],
          ],
          [
            [0.5, 43.8],
            [1.5, 43.8],
            [2.5, 44.3],
          ],
          [
            [1, 43.6],
            [2, 43.6],
            [3, 44.1],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'MultiPolygon',
        coordinates: [
          [
            [
              [4, 45],
              [4.5, 44.5],
              [4, 44],
              [4, 45],
            ],
          ],
          [
            [
              [5, 45],
              [5.5, 44.5],
              [5, 44],
              [5, 45],
            ],
          ],
          [
            [
              [6, 45],
              [6.5, 44.5],
              [6, 44],
              [6, 45],
            ],
          ],
        ],
      },
    },
  ];

  ngOnInit() {}
}
