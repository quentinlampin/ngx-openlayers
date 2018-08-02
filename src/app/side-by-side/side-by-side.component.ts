import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent, ViewComponent } from 'ngx-openlayers';

@Component({
  selector: 'app-side-by-side',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>

      <aol-view #view [zoom]="5">
        <aol-coordinate [x]="2.181539" [y]="47.125488" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1">
        <aol-source-osm></aol-source-osm>
      </aol-layer-tile>
    </aol-map>

    <aol-map #secondMap width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>
      <aol-layer-tile>
        <aol-source-xyz
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}">
        </aol-source-xyz>
      </aol-layer-tile>
    </aol-map>
  `,
  styles: [
    `
      :host {
        display: flex;
      }

      aol-map {
        width: 50%;
      }
    `,
  ],
})
export class SideBySideComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChild('secondMap')
  secondMap: MapComponent;
  @ViewChild('view')
  view: ViewComponent;

  ngOnInit() {}

  ngAfterViewInit() {
    this.secondMap.instance.setView(this.view.instance);
  }
}
