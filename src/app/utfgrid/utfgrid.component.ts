import { Component, ViewChild } from '@angular/core';
import { SourceUTFGridComponent, ViewComponent } from 'ngx-openlayers';

@Component({
  selector: 'app-root',
  template: `
    <aol-map (pointerMove)="displayInfo($event.coordinate)">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>
      <aol-control-fullscreen></aol-control-fullscreen>
      <aol-view #view [zoom]="2" [center]="[3000000, 3000000]"></aol-view>
      <aol-layer-tile> <aol-source-osm></aol-source-osm> </aol-layer-tile>
      <aol-layer-tile>
        <aol-source-utfgrid
          #UTFGrid
          [url]="'https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=' + key"
        ></aol-source-utfgrid>
      </aol-layer-tile>
      <aol-overlay *ngIf="coords && info" [positioning]="'BOTTOM_RIGHT'" [stopEvent]="false">
        <aol-coordinate [x]="coords[0]" [y]="coords[1]" [srid]="'EPSG:3857'"> </aol-coordinate>
        <aol-content>
          <img [src]="'data:image/png;base64,' + info['flag_png']" />
        </aol-content>
      </aol-overlay>
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
})
export class UTFGridComponent {
  @ViewChild('UTFGrid', { static: true }) UTFGrid: SourceUTFGridComponent;
  @ViewChild('view', { static: true }) view: ViewComponent;

  info: any;
  coords: [number, number];
  key = 'pk.eyJ1IjoieWFrb3VzdCIsImEiOiJjanVkc3Y0b2cwNWppM3lwaXd5M3JidHRzIn0.rJmuWPJnuKA9MJ9z5RPKZw';

  displayInfo(c) {
    this.UTFGrid.instance.forDataAtCoordinateAndResolution(c, this.view.instance.getResolution(), (data) => {
      if (data !== null && data !== undefined && data !== '') {
        this.info = data;
        this.coords = c;
      }
    });
  }
}
