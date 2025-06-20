import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {
  CollectionCoordinatesComponent,
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  FeatureComponent,
  GeometryPolygonComponent,
  LayerGroupComponent,
  LayerTileComponent,
  LayerVectorComponent,
  MapComponent,
  SelectInteractionComponent,
  SourceOsmComponent,
  SourceVectorComponent,
  StyleComponent,
  StyleFillComponent,
  StyleStrokeComponent,
  ViewComponent,
} from 'ngx-openlayers';
import { Feature } from 'ol';
import { Layer } from 'ol/layer';
import { Fill, Stroke, Style } from 'ol/style';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-color-select-hover',
  template: `
    <aol-map #map (pointerMove)="changeFeatureHovered($event)" width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-interaction-select #select [style]="styleInteratiselected"></aol-interaction-select>

      <aol-view [zoom]="5">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-group>
        <aol-layer-vector #aoiLayerVector *ngFor="let f of features.features">
          <aol-style *ngIf="f.id === hoveredFeatureId; else notHovered">
            <aol-style-stroke [color]="'white'" [width]="3"></aol-style-stroke>
            <aol-style-fill [color]="'rgba(90, 17, 26, 0.3)'"></aol-style-fill>
          </aol-style>
          <ng-template #notHovered>
            <aol-style>
              <aol-style-stroke [color]="'rgba(90, 17, 26)'" [width]="3"></aol-style-stroke>
              <aol-style-fill [color]="'rgba(90, 17, 26, 0.5)'"></aol-style-fill>
            </aol-style>
          </ng-template>
          <aol-source-vector>
            <aol-feature [id]="f.id">
              <aol-geometry-polygon>
                <aol-collection-coordinates
                  [coordinates]="f.geometry.coordinates"
                  [srid]="'EPSG:4326'"
                ></aol-collection-coordinates>
              </aol-geometry-polygon>
            </aol-feature>
          </aol-source-vector>
        </aol-layer-vector>
      </aol-layer-group>
    </aol-map>
  `,
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    SelectInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    LayerGroupComponent,
    LayerVectorComponent,
    StyleComponent,
    StyleStrokeComponent,
    StyleFillComponent,
    SourceVectorComponent,
    FeatureComponent,
    GeometryPolygonComponent,
    CollectionCoordinatesComponent,
  ],
})
export class ColorSelectHoverComponent {
  @ViewChild('map', { static: true })
  map: MapComponent;
  @ViewChildren('aoiLayerVector')
  aoiLayerVector: QueryList<LayerVectorComponent>;

  features = {
    type: 'FeatureCollection',
    features: [
      {
        id: 1,
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-1.4501953125, 48.40003249610685],
              [2.13134765625, 48.40003249610685],
              [2.13134765625, 50.13466432216694],
              [-1.4501953125, 50.13466432216694],
              [-1.4501953125, 48.40003249610685],
            ],
          ],
        },
      },
      {
        id: 2,
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [5.3173828125, 47.368594345213374],
              [9.29443359375, 47.368594345213374],
              [9.29443359375, 49.36806633482156],
              [5.3173828125, 49.36806633482156],
              [5.3173828125, 47.368594345213374],
            ],
          ],
        },
      },
      {
        id: 3,
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-3.3837890625, 43.61221676817573],
              [1.51611328125, 43.61221676817573],
              [1.51611328125, 46.694667307773116],
              [-3.3837890625, 46.694667307773116],
              [-3.3837890625, 43.61221676817573],
            ],
          ],
        },
      },
      {
        id: 4,
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [4.50439453125, 42.342305278572816],
              [9.16259765625, 42.342305278572816],
              [9.16259765625, 45.66012730272194],
              [4.50439453125, 45.66012730272194],
              [4.50439453125, 42.342305278572816],
            ],
          ],
        },
      },
    ],
  };

  styleInteratiselected = new Style({
    fill: new Fill({
      color: 'rgba(0, 153, 255, 0.1)',
    }),
    stroke: new Stroke({
      color: 'rgba(0, 153, 255)',
      width: 3,
    }),
  });

  hoveredFeatureId;

  changeFeatureHovered(event): void {
    const hit: Feature = this.map.instance.forEachFeatureAtPixel(event.pixel, (f) => f, {
      layerFilter: inLayer(...this.aoiLayerVector.toArray()),
      hitTolerance: 10,
    }) as Feature;

    if (!hit && this.hoveredFeatureId) {
      this.hoveredFeatureId = null;
    }
    if (hit && hit.getId() !== this.hoveredFeatureId) {
      this.hoveredFeatureId = hit.getId();
    }
  }
}

const inLayer =
  (...layers: LayerVectorComponent[]): ((l: Layer) => boolean) =>
  (l: Layer) =>
    layers.some((layer) => layer.instance === l);
