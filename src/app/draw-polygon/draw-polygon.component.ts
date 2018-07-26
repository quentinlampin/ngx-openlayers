import { Component, OnInit } from '@angular/core';
import { interaction, Feature, geom, proj } from 'openlayers';

@Component({
  selector: 'app-draw-polygon',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-interaction-draw
        *ngIf="isDrawing"
        type="Circle"
        [geometryFunction]="drawBoxGeometryFunction"
        (onDrawEnd)="endDraw($event.feature)">
      </aol-interaction-draw>

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
      <div class="draw-section">
        <button (click)="drawMode()">{{isDrawing ? 'End draw' : 'Start draw'}}</button>
        <h3>Result</h3>
        <pre><code>{{feature | json }}</code></pre>
      </div>
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
export class DrawPolygonComponent implements OnInit {
  constructor() {}

  isDrawing = false;
  drawBoxGeometryFunction = interaction.Draw.createBox();
  feature;

  ngOnInit() {}

  drawMode() {
    this.isDrawing = !this.isDrawing;
  }

  endDraw(feature: Feature) {
    const olGeomPolygon = geom.Polygon.fromExtent(feature.getGeometry().getExtent());
    olGeomPolygon.transform(new proj.Projection({ code: 'EPSG:3857' }), new proj.Projection({ code: 'EPSG:4326' }));
    this.feature = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [olGeomPolygon.getCoordinates()[0]],
      },
    };
  }
}
