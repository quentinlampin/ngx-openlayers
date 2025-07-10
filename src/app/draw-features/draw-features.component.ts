import { Component } from '@angular/core';
import { Feature } from 'ol';
import { createBox } from 'ol/interaction/Draw';
import { JsonPipe } from '@angular/common';
import {
  CoordinateComponent,
  DefaultInteractionComponent,
  DrawInteractionComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  ViewComponent,
} from 'ngx-openlayers';
import { MatFormField, MatLabel, MatOption, MatSelect } from '@angular/material/select';
import { GeoJSONFeature } from 'ol/format/GeoJSON';
import { GeoJSON } from 'ol/format';

@Component({
  selector: 'app-draw-polygon',
  template: `
    <aol-map #map>
      <aol-interaction-default></aol-interaction-default>
      @switch (currentDrawType) {
        @case ('Point') {
          <aol-interaction-draw type="Point" [source]="drawnFeatureSource.instance" (drawEnd)="endDraw($event.feature)">
          </aol-interaction-draw>
        }
        @case ('LineString') {
          <aol-interaction-draw
            type="LineString"
            [source]="drawnFeatureSource.instance"
            (drawEnd)="endDraw($event.feature)"
          >
          </aol-interaction-draw>
        }
        @case ('Polygon') {
          <aol-interaction-draw
            type="Polygon"
            [source]="drawnFeatureSource.instance"
            (drawEnd)="endDraw($event.feature)"
          >
          </aol-interaction-draw>
        }
        @case ('Circle') {
          <aol-interaction-draw
            type="Circle"
            [source]="drawnFeatureSource.instance"
            (drawEnd)="endDraw($event.feature)"
          >
          </aol-interaction-draw>
        }
        @case ('Bbox') {
          <aol-interaction-draw
            type="Circle"
            [source]="drawnFeatureSource.instance"
            [geometryFunction]="drawBoxGeometryFunction"
            (drawEnd)="endDraw($event.feature)"
          >
          </aol-interaction-draw>
        }
      }

      <aol-view [zoom]="5">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
      <aol-layer-vector>
        <aol-source-vector #drawnFeatureSource> </aol-source-vector>
      </aol-layer-vector>
    </aol-map>

    <div class="info">
      <div class="draw-section">
        <mat-form-field [style.width.%]="100">
          <mat-label>Type of geometry to draw</mat-label>
          <mat-select (selectionChange)="currentDrawType = $event.value">
            <mat-option value="Point">Point</mat-option>
            <mat-option value="Circle">Circle</mat-option>
            <mat-option value="LineString">LineString</mat-option>
            <mat-option value="Polygon">Polygon</mat-option>
            <mat-option value="Bbox">Bbox</mat-option>
            <mat-option value="None">None</mat-option>
          </mat-select>
        </mat-form-field>
        <h3>Last drawn feature</h3>
        <code>
          <pre>{{ feature | json }}</pre>
        </code>
      </div>
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
  standalone: true,
  imports: [
    JsonPipe,
    MapComponent,
    DefaultInteractionComponent,
    DrawInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    LayerVectorComponent,
    SourceVectorComponent,
    MatSelect,
    MatOption,
    MatLabel,
    MatFormField,
  ],
})
export class DrawFeaturesComponent {
  drawBoxGeometryFunction = createBox();
  feature: GeoJSONFeature;
  geoJsonParser = new GeoJSON({ featureProjection: 'EPSG:3857', dataProjection: 'EPSG:4326' });

  currentDrawType: 'Point' | 'Circle' | 'Polygon' | 'LineString' | 'Bbox' | 'None' = 'Point';

  endDraw(feature: Feature): void {
    this.feature = this.geoJsonParser.writeFeatureObject(feature);
  }
}
