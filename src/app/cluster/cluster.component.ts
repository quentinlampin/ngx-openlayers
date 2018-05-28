import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cluster',
  template: `
    <aol-map [width]="'100%'" [height]="'100%'">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-fullscreen></aol-control-fullscreen>

      <aol-view [zoom]="14">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>

      <aol-layer-vector>
        <aol-source-cluster [distance]="distance">
          <aol-source-vector>
            <aol-feature *ngFor="let p of points">
              <aol-geometry-point>
                <aol-coordinate [x]="p.x" [y]="p.y" [srid]="'EPSG:4326'"></aol-coordinate>
              </aol-geometry-point>
            </aol-feature>
          </aol-source-vector>

          <aol-style>
            <aol-style-circle [radius]="10">
              <aol-style-stroke [color]="'#fff'"></aol-style-stroke>
              <aol-style-fill [color]="'#3399CC'"></aol-style-fill>
            </aol-style-circle>
            <aol-style-text [text]="'1'">
              <aol-style-fill [color]="'#fff'"></aol-style-fill>
            </aol-style-text>
          </aol-style>

        </aol-source-cluster>
      </aol-layer-vector>

      <aol-layer-vector>
        <aol-source-vector>
          <aol-feature>
            <aol-geometry-polygon>
              <aol-collection-coordinates
                [coordinates]="[[1.47, 43.545],[1.51, 43.545],[1.51, 43.565], [1.47, 43.565]]"
                [srid]="'EPSG:4326'"
              >
              </aol-collection-coordinates>
            </aol-geometry-polygon>
            <aol-style>
              <aol-style-stroke [color]="'red'" [width]="2"></aol-style-stroke>
              <aol-style-fill [color]="[255,0,0,0.1]"></aol-style-fill>
            </aol-style>
          </aol-feature>

        </aol-source-vector>
      </aol-layer-vector>
    </aol-map>
  `,
})
export class ClusterComponent implements OnInit {
  distance = 60;
  points: Array<{ x: number; y: number }> = [];

  ngOnInit() {
    // Generate random points
    const nbPoints = 2000;
    for (let i = 0; i < nbPoints; ++i) {
      this.points.push({
        x: this.getRandomInRange(1.47, 1.51, 4),
        y: this.getRandomInRange(43.545, 43.565, 4),
      });
    }
  }

  getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  }
}
