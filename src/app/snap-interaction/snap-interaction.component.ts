import { Component, signal } from '@angular/core';
import { Feature as GeoJSonFeature, Polygon as GeoJSonPolygon } from 'geojson';
import {
  CollectionCoordinatesComponent,
  CoordinateComponent,
  DefaultInteractionComponent,
  FeatureComponent,
  GeometryPolygonComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  SnapInteractionComponent as NgxOlSnapInteractionComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  ViewComponent,
} from 'ngx-openlayers';
import { SnapEvent } from 'ol/events/SnapEvent';

@Component({
  selector: 'app-snap-interaction',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>

      <aol-view [zoom]="5">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      <aol-layer-vector>
        <aol-source-vector #vectorSource>
          <aol-feature>
            <aol-geometry-polygon>
              <aol-collection-coordinates [coordinates]="feature.geometry.coordinates" [srid]="'EPSG:4326'">
              </aol-collection-coordinates>
            </aol-geometry-polygon>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>
      <aol-interaction-snap
        [pixelTolerance]="50"
        [source]="vectorSource.instance"
        (snap)="onSnap($event)"
        (unsnap)="onUnsnap($event)"
      >
      </aol-interaction-snap>
    </aol-map>

    <div class="info">
      <h3>Result</h3>
      <p>Snapped : {{ snapped() }}</p>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100%;
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
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    LayerVectorComponent,
    SourceVectorComponent,
    FeatureComponent,
    GeometryPolygonComponent,
    CollectionCoordinatesComponent,
    NgxOlSnapInteractionComponent,
  ],
})
export class SnapInteractionComponent {
  feature: GeoJSonFeature<GeoJSonPolygon> = {
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

  snapped = signal(false);

  onSnap(event: SnapEvent): void {
    console.log(event);
    this.snapped.set(true);
  }

  onUnsnap(event: SnapEvent): void {
    console.log(event);
    this.snapped.set(false);
  }
}
