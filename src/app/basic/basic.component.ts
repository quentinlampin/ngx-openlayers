import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <aol-map [width]="'100%'" [height]="'100%'">
      <aol-view
        [zoom]="zoom"
        (changeResolution)="changeResolution($event)"
        (changeZoom)="changeZoom($event)"
        (changeCenter)="changeCenter($event)"
      >
        <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>
      <aol-layer-tile [opacity]="opacity"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
      <aol-layer-vector [opacity]="opacity">
        <aol-source-vector>
          <aol-feature>
            <aol-geometry-point>
              <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
            </aol-geometry-point>
            <aol-style>
              <aol-style-circle [radius]="10">
                <aol-style-stroke [color]="'black'" [width]="width"></aol-style-stroke>
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
      <span>opacity:</span><button (click)="increaseOpacity()">+</button><button (click)="decreaseOpacity()">-</button
      ><br />
      <span>zoom:</span><button (click)="increaseZoom()">+</button><button (click)="decreaseZoom()">-</button><br />
      <span>latitude:</span><button (click)="increaseLat()">+</button><button (click)="decreaseLat()">-</button><br />
      <span>longitude:</span><button (click)="increaseLon()">+</button><button (click)="decreaseLon()">-</button><br />
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
export class BasicComponent {
  public zoom = 15;
  public opacity = 1.0;
  public width = 5;
  public lon = 5;
  public lat = 45;

  increaseZoom() {
    this.zoom = Math.min(this.zoom + 1, 18);
    console.log('zoom: ', this.zoom);
  }

  decreaseZoom() {
    this.zoom = Math.max(this.zoom - 1, 1);
    console.log('zoom: ', this.zoom);
  }

  increaseLat() {
    this.lat = Math.max(-90, Math.min(90, this.lat + 1));
    console.log('lat: ', this.lat);
  }

  decreaseLat() {
    this.lat = Math.max(-90, Math.min(90, this.lat - 1));
    console.log('lat: ', this.lat);
  }

  increaseLon() {
    this.lon = Math.max(-180, Math.min(180, this.lat + 1));
    console.log('lon: ', this.lon);
  }

  decreaseLon() {
    this.lon = Math.max(-180, Math.min(180, this.lat - 1));
    console.log('lon: ', this.lon);
  }

  increaseOpacity() {
    this.opacity = Math.min(this.opacity + 0.1, 1);
    console.log('opacity: ', this.opacity);
  }

  decreaseOpacity() {
    this.opacity = Math.max(this.opacity - 0.1, 0);
    console.log('opacity: ', this.opacity);
  }

  changeResolution(evt) {
    console.log('Resolution changed:', evt);
  }

  changeCenter(evt) {
    console.log('Center changed:', evt);
  }

  changeZoom(evt) {
    console.log('Zoom changed:', evt);
  }
}
