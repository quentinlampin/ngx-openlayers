import { Component, OnInit } from '@angular/core';
import { Feature as OlFeature, format, proj } from 'openlayers';
import { Feature } from 'geojson';

@Component({
  selector: 'app-modify-polygon',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-interaction-select [wrapX]="true" #select  ></aol-interaction-select>
      <aol-interaction-modify
        #modify
        [features]="select.instance.getFeatures()"
        (onModifyEnd)="modifyEnd($event.features.getArray()[0])">
      </aol-interaction-modify>

      <aol-view [zoom]="5">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      <aol-layer-vector *ngIf="feature">
        <aol-source-vector>
          <aol-feature>
            <aol-geometry-polygon>
              <aol-collection-coordinates
                [coordinates]="feature.geometry.coordinates[0]"
                [srid]="'EPSG:4326'">
              </aol-collection-coordinates>
            </aol-geometry-polygon>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>
    </aol-map>

    <div class="info">
      <h3>Result</h3>
      <pre><code>{{feature | json }}</code></pre>
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

      .info {
        width: 28%;
        padding: 1rem;
      }
    `,
  ],
})
export class ModifyPolygonComponent implements OnInit {
  constructor() {}

  format: format.GeoJSON = new format.GeoJSON();
  displayProj = new proj.Projection({ code: 'EPSG:3857' });
  inputProj = new proj.Projection({ code: 'EPSG:4326' });

  feature: Feature = {
    geometry: {
      coordinates: [
        [
          [-1.7138671875, 43.35713822211053],
          [4.515380859375, 43.35713822211053],
          [4.515380859375, 47.76886840424207],
          [-1.7138671875, 47.76886840424207],
          [-1.7138671875, 43.35713822211053],
        ],
      ],
      type: 'Polygon',
    },
    properties: {},
    type: 'Feature',
  };

  ngOnInit() {}

  modifyEnd(feature: OlFeature) {
    this.feature = this.format.writeFeatureObject(feature, {
      dataProjection: this.inputProj,
      featureProjection: this.displayProj,
    });
  }
}
