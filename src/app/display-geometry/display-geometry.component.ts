import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-geometry',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="6">
        <aol-coordinate [x]="1" [y]="46.292896" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      <aol-layer-group>
        <aol-layer-vector *ngFor="let feature of features">
          <ng-container [ngSwitch]="feature.geometry.type">
            <aol-source-vector *ngSwitchCase="'Polygon'">
              <aol-style>
                <aol-style-stroke [color]="'rgba(90, 17, 26)'" width="3"></aol-style-stroke>
                <aol-style-fill [color]="'rgba(90, 17, 26, 0.5)'" ></aol-style-fill>
              </aol-style>
              <aol-feature>
                <aol-geometry-polygon>
                  <aol-collection-coordinates [coordinates]="feature.geometry.coordinates[0]" [srid]="'EPSG:4326'">
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
                    [srid]="'EPSG:4326'">
                  </aol-coordinate>
                  <aol-style>
                    <aol-style-circle [radius]="10">
                      <aol-style-stroke [color]="'black'" [width]="width"></aol-style-stroke>
                      <aol-style-fill [color]="'green'"></aol-style-fill>
                    </aol-style-circle>
                  </aol-style>
                </aol-geometry-point>
              </aol-feature>
            </aol-source-vector>
            <aol-source-vector *ngSwitchCase="'LineString'">
              <aol-feature>
                <aol-geometry-linestring>
                  <aol-collection-coordinates
                    [coordinates]="feature.geometry.coordinates"
                    [srid]="'EPSG:4326'">
                  </aol-collection-coordinates>
                </aol-geometry-linestring>
              </aol-feature>
            </aol-source-vector>
          </ng-container>
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
  ];

  ngOnInit() {}
}
