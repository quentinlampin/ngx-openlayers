import { AfterViewInit, Component, viewChild } from '@angular/core';
import {
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  SourceOsmComponent,
  SourceXYZComponent,
  ViewComponent,
} from 'ngx-openlayers';

@Component({
  selector: 'app-side-by-side',
  template: `
    <aol-map #map>
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view #view [zoom]="5">
        <aol-coordinate [x]="2.181539" [y]="47.125488" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
    </aol-map>

    <aol-map #secondMap>
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-layer-tile>
        <aol-source-xyz
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        >
        </aol-source-xyz>
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
        width: 50%;
        height: 100%;
      }
    `,
  ],
  imports: [
    MapComponent,
    DefaultInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    SourceXYZComponent,
    DefaultControlComponent,
  ],
})
export class SideBySideComponent implements AfterViewInit {
  readonly secondMap = viewChild.required<MapComponent>('secondMap');
  readonly view = viewChild.required<ViewComponent>('view');

  ngAfterViewInit(): void {
    const secondMapInstance = this.secondMap().instance;
    const viewInstance = this.view().instance;

    if (!secondMapInstance || !viewInstance) {
      return;
    }

    secondMapInstance.setView(viewInstance);
  }
}
