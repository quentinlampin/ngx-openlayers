import { Component } from '@angular/core';
import { transform } from 'ol/proj';
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
  selector: 'app-cursor-position',
  template: `
    <aol-map #map width="100%" height="100%" (pointerMove)="dispatchCursor($event)">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="14">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
    </aol-map>

    <div class="info">
      <div class="cursor-coordinates">
        <h3>Cursor coordinates</h3>
        <span>Longitude: {{ lonToString(lon) }}</span> <span>Latitude: {{ latToString(lat) }}</span>
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

      .cursor-coordinates {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  standalone: true,
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
  ],
})
export class CursorPositionComponent {
  lon = 0;
  lat = 0;

  dispatchCursor(event): void {
    const coordinates = event.coordinate;
    this.lon = transform(coordinates, 'EPSG:3857', 'EPSG:4326')[0];
    this.lat = transform(coordinates, 'EPSG:3857', 'EPSG:4326')[1];
  }

  latToString(lat: number): string {
    return toSexagesimal(lat, '', '-');
  }

  lonToString(lon: number): string {
    return toSexagesimal(lon, '', '-');
  }
}

const toSexagesimal = (value: number, positiveSuffix: string, negativeSuffix: string): string => {
  const modValue = ((value + 180) % 360) - 180;
  return (modValue > 0 ? positiveSuffix : negativeSuffix) + Math.abs(modValue).toFixed(6);
};
