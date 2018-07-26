import { Component, OnInit } from '@angular/core';
import { proj } from 'openlayers';

@Component({
  selector: 'app-cursor-position',
  template: `
    <aol-map #map width="100%" height="100%" (onPointerMove)="dispatchCursor($event)">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view [zoom]="14">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>
    </aol-map>

    <div class="info">
      <div class="cursor-coordinates">
        <h3>Cursor coordinates</h3>
        <span>Longitude: {{lonToString(lon)}}</span>
        <span>Latitude: {{latToString(lat)}}</span>
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

      .cursor-coordinates {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class CursorPositionComponent implements OnInit {
  constructor() {}

  lon = 0;
  lat = 0;

  ngOnInit() {}

  dispatchCursor(event): void {
    const coordinates = event.coordinate;
    this.lon = proj.transform(coordinates, 'EPSG:3857', 'EPSG:4326')[0];
    this.lat = proj.transform(coordinates, 'EPSG:3857', 'EPSG:4326')[1];
  }

  latToString(lat: number) {
    return toSexagesimal(lat, '', '-');
  }

  lonToString(lon: number) {
    return toSexagesimal(lon, '', '-');
  }
}

function toSexagesimal(value: number, positiveSuffix: string, negativeSuffix: string): string {
  const modValue = ((value + 180) % 360) - 180;
  return (modValue > 0 ? positiveSuffix : negativeSuffix) + Math.abs(modValue).toFixed(6);
}
