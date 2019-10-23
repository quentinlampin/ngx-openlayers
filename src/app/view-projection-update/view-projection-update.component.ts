import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <aol-map [width]="'100%'" [height]="'100%'">
      <aol-interaction-default></aol-interaction-default>
      <aol-view [zoom]="2" [projection]="viewProjection">
        <aol-coordinate [x]="0" [y]="0" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>
      <aol-layer-tile> <aol-source-osm></aol-source-osm> </aol-layer-tile>
      <aol-layer-vector>
        <aol-source-vector>
          <aol-feature>
            <aol-geometry-point>
              <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
            </aol-geometry-point>
            <aol-style>
              <aol-style-circle [radius]="10">
                <aol-style-stroke [color]="'black'" [width]="2"></aol-style-stroke>
                <aol-style-fill [color]="'green'"></aol-style-fill>
              </aol-style-circle>
            </aol-style>
          </aol-feature>
          <aol-feature>
            <aol-geometry-point>
              <aol-coordinate [x]="5.1" [y]="45.1" [srid]="'EPSG:4326'"></aol-coordinate>
            </aol-geometry-point>
            <aol-style>
              <aol-style-icon
                [src]="'assets/marker.png'"
                [anchor]="[0.5, 1]"
                [anchorXUnits]="'fraction'"
                [anchorYUnits]="'fraction'"
                [scale]="0.1"
                [anchorOrigin]="'top-left'"
              >
              </aol-style-icon>
            </aol-style>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>
    </aol-map>
    <div class="controls">
      Current projection:
      <select (change)="projectionChange($event)">
        <option value="EPSG:3857">EPSG:3857</option>
        <option value="EPSG:4326">EPSG:4326</option>
      </select>
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

      .controls {
        width: 28%;
        padding: 1rem;
      }
    `,
  ],
})
export class ViewProjectionUpdateComponent {
  public viewProjection = 'EPSG:3857';

  projectionChange(evt) {
    console.log(`Projection changed to ${evt.target.value}`);
    this.viewProjection = evt.target.value;
  }
}
