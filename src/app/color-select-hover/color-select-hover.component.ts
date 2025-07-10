import { Component } from '@angular/core';
import {
  CollectionCoordinatesComponent,
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  FeatureComponent,
  GeometryPolygonComponent,
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
import { Fill, Stroke, Style } from 'ol/style';
import { pointerMove } from 'ol/events/condition';
import { SelectEvent } from 'ol/interaction/Select';

@Component({
  selector: 'app-color-select-hover',
  template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-interaction-select [style]="styleInteractionClick" (olSelect)="onSelect($event)"></aol-interaction-select>
      <aol-interaction-select
        [style]="styleInteractionHover"
        [condition]="pointerMove"
        (olSelect)="onHover($event)"
      ></aol-interaction-select>

      <aol-view [zoom]="5">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
      <aol-layer-vector>
        <aol-style>
          <aol-style-stroke [color]="'rgba(90, 17, 26)'" [width]="3"></aol-style-stroke>
          <aol-style-fill [color]="'rgba(90, 17, 26, 0.5)'"></aol-style-fill>
        </aol-style>
        <aol-source-vector>
          @for (f of features; track f.id) {
            <aol-feature [id]="f.id">
              <aol-geometry-polygon>
                <aol-collection-coordinates
                  [coordinates]="f.geometry.coordinates"
                  [srid]="'EPSG:4326'"
                ></aol-collection-coordinates>
              </aol-geometry-polygon>
            </aol-feature>
          }
        </aol-source-vector>
      </aol-layer-vector>
    </aol-map>
  `,
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    SelectInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
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
  protected readonly pointerMove = pointerMove;
  public readonly features = [
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
  ];

  public readonly styleInteractionClick = new Style({
    fill: new Fill({
      color: 'rgba(0, 153, 255, 0.1)',
    }),
    stroke: new Stroke({
      color: 'rgba(0, 153, 255)',
      width: 3,
    }),
  });

  public readonly styleInteractionHover = new Style({
    fill: new Fill({
      color: 'rgba(47,255,0,0.1)',
    }),
    stroke: new Stroke({
      color: 'rgb(238,255,0)',
      width: 3,
    }),
  });

  onHover(event: SelectEvent): void {
    console.log(event);
  }

  onSelect(event: SelectEvent): void {
    console.log(event);
  }
}
