import { Component } from '@angular/core';
import {
  ControlOverviewMapComponent,
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  SourceOsmComponent,
  ViewComponent,
} from 'ngx-openlayers';

@Component({
  selector: 'app-root',
  template: `
    <aol-map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-overviewmap></aol-control-overviewmap>
      <aol-view #view [zoom]="zoom">
        <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>
      <aol-layer-tile #osm [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
    </aol-map>
  `,
  standalone: true,
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    ControlOverviewMapComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
  ],
})
export class OverviewComponent {
  public zoom = 15;
}
