import { Component } from '@angular/core';
import { toStringXY } from 'ol/coordinate';
import {
  ControlMousePositionComponent,
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  SourceOsmComponent,
  ViewComponent,
} from 'ngx-openlayers';

@Component({
  selector: 'app-cursor-position',
  template: `
    <aol-map>
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-mouseposition projection="EPSG:4326" [coordinateFormat]="toStringXY"></aol-control-mouseposition>

      <aol-view [zoom]="14">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
    </aol-map>
  `,
  styles: [
    `
      :host {
        height: 100%;
      }

      aol-map {
        width: 100%;
        height: 100%;
        position: relative;
      }
    `,
  ],
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    ControlMousePositionComponent,
  ],
})
export class CursorPositionComponent {
  protected readonly toStringXY = (coord) => toStringXY(coord, 4);
}
