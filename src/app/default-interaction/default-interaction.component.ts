import { Component } from '@angular/core';
import {
  CoordinateComponent,
  DefaultInteractionComponent as NgxOlDefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  SourceOsmComponent,
  ViewComponent,
} from 'ngx-openlayers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-default-interaction',
  template: `
    <div>
      <aol-map #map width="100%" height="100%">
        <aol-interaction-default
          [altShiftDragRotate]="altShiftDragRotate"
          [doubleClickZoom]="doubleClickZoom"
          [keyboard]="keyboard"
          [mouseWheelZoom]="mouseWheelZoom"
          [shiftDragZoom]="shiftDragZoom"
          [dragPan]="dragPan"
          [pinchRotate]="pinchRotate"
          [pinchZoom]="pinchZoom"
        >
        </aol-interaction-default>
        <aol-view [zoom]="5">
          <aol-coordinate [x]="1.4886" [y]="43.5554" [srid]="'EPSG:4326'"></aol-coordinate>
        </aol-view>

        <aol-layer-tile [opacity]="1">
          <aol-source-osm></aol-source-osm>
        </aol-layer-tile>
      </aol-map>
      <div class="options">
        <h2>Options</h2>
        <form>
          <div>
            <label for="altShiftDragRotate">Alt shift drag rotate</label>
            <input id="altShiftDragRotate" type="checkbox" [(ngModel)]="altShiftDragRotate" />
          </div>
          <div>
            <label for="doubleClickZoom">Double click zoom</label>
            <input id="doubleClickZoom" type="checkbox" [(ngModel)]="doubleClickZoom" />
          </div>
          <div>
            <label for="keyboard">Keyboard</label>
            <input id="keyboard" type="checkbox" [(ngModel)]="keyboard" />
          </div>
          <div>
            <label for="mouseWheelZoom">Mouse wheel zoom</label>
            <input id="mouseWheelZoom" type="checkbox" [(ngModel)]="mouseWheelZoom" />
          </div>
          <div>
            <label for="shiftDragZoom">Alt shift drag rotate</label>
            <input id="shiftDragZoom" type="checkbox" [(ngModel)]="shiftDragZoom" />
          </div>
          <div>
            <label for="dragPan">Drag Pan</label>
            <input id="dragPan" type="checkbox" [(ngModel)]="dragPan" />
          </div>
          <div>
            <label for="pinchRotate">Pinch rotate</label>
            <input id="pinchRotate" type="checkbox" [(ngModel)]="pinchRotate" />
          </div>
          <div>
            <label for="pinchZoom">Pinch zoom</label>
            <input id="pinchZoom" type="checkbox" [(ngModel)]="pinchZoom" />
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      div {
        height: 100%;
        display: flex;
      }

      aol-map {
        width: 70%;
      }

      .options {
        width: 28%;
        padding: 1rem;
        display: block;
        flex-direction: column;
      }
    `,
  ],

  imports: [
    MapComponent,
    NgxOlDefaultInteractionComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DefaultInteractionComponent {
  altShiftDragRotate = true;
  doubleClickZoom = true;
  keyboard = true;
  mouseWheelZoom = true;
  shiftDragZoom = true;
  dragPan = true;
  pinchRotate = true;
  pinchZoom = true;
}
