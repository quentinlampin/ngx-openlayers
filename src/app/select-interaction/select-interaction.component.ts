import { Component, ViewChild } from '@angular/core';
import { Layer as OlLayer } from 'ol/layer';
import { LayerVectorComponent } from '../../../projects/ngx-openlayers/src/lib/layers/layervector.component';
import { SelectEvent } from 'ol/interaction/Select';

@Component({
  selector: 'app-select-interaction',
  template: `
    <aol-map #map width="100%" height="100%">
      <aol-interaction-default></aol-interaction-default>

      <aol-interaction-select
        [layers]="isMarkerLayer"
        (onSelect)="onSelect($event)"
        [wrapX]="false"
      ></aol-interaction-select>

      <aol-view [zoom]="5">
        <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>

      <aol-layer-vector #markersLayer>
        <aol-source-vector #markersSource [wrapX]="false">
          <aol-feature>
            <aol-geometry-point>
              <aol-coordinate [x]="5" [y]="45" [srid]="'EPSG:4326'"></aol-coordinate>
            </aol-geometry-point>
          </aol-feature>
        </aol-source-vector>
      </aol-layer-vector>
    </aol-map>
  `,
})
export class SelectInteractionComponent {
  @ViewChild('markersLayer') markersLayer: LayerVectorComponent;

  constructor() {}

  isMarkerLayer = (layer: OlLayer) => layer === this.markersLayer.instance;

  onSelect($event: SelectEvent) {
    console.log($event);
  }
}
