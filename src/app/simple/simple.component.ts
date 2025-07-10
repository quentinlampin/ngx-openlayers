import { Component } from '@angular/core';
import {
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
    <aol-map>
      <aol-control-defaults></aol-control-defaults>
      <aol-interaction-default></aol-interaction-default>
      <aol-view [zoom]="initialZoom" [maxZoom]="maxZoom" [minZoom]="minZoom">
        <aol-coordinate [x]="lon" [y]="lat" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>
      <aol-layer-tile>
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>
    </aol-map>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
      }

      aol-map {
        width: 100%;
        height: 100%;
      }
    `,
  ],
  standalone: true,
  imports: [
    MapComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    DefaultControlComponent,
    DefaultInteractionComponent,
  ],
})
export class SimpleComponent {
  public initialZoom = 15;
  public maxZoom = 15;
  public minZoom = 1;
  public lon = 5;
  public lat = 45;
}
