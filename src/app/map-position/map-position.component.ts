import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  CoordinateComponent,
  DefaultControlComponent,
  DefaultInteractionComponent,
  LayerTileComponent,
  MapComponent,
  SourceOsmComponent,
  ViewComponent,
} from 'ngx-openlayers';
import { Projection, transform } from 'ol/proj';

interface MapPositionForm {
  x: FormControl<number>;
  y: FormControl<number>;
  zoom: FormControl<number>;
}
@Component({
  selector: 'app-map-position',
  template: `
    <aol-map #map width="100%" height="100%" (moveStart)="startMoving()" (moveEnd)="displayCoordinates()">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view #view [zoom]="form.get('zoom')?.value">
        <aol-coordinate
          [x]="form.get('x')?.value ?? 0"
          [y]="form.get('y')?.value ?? 0"
          srid="EPSG:4326"
        ></aol-coordinate>
      </aol-view>

      <aol-layer-tile [opacity]="1"> <aol-source-osm></aol-source-osm> </aol-layer-tile>
    </aol-map>

    <div class="info">
      <div class="current-coordinates">
        <h3>Map coordinates</h3>
        <span>Longitude: {{ moving ? '----' : currentLon }}</span>
        <span>Latitude: {{ moving ? '----' : currentLat }}</span>
        <span>Zoom: {{ moving ? '----' : currentZoom }}</span>
      </div>
      <div class="update-coordinates">
        <h3>Update coordinates</h3>
        <form [formGroup]="form">
          <div class="row"><label>Longitude:</label><input min="0" type="number" formControlName="x" /></div>
          <div class="row"><label>Latitude:</label><input min="0" type="number" formControlName="y" /></div>
          <div class="row"><label>Zoom:</label><input min="0" type="number" formControlName="zoom" /></div>
        </form>
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

      .current-coordinates {
        display: flex;
        flex-direction: column;
      }

      .update-coordinates form {
        display: flex;
        flex-direction: column;
      }

      .row {
        padding: 1rem;
      }

      .row label {
        min-width: 5rem;
        display: inline-block;
        float: left;
      }

      .row input {
        width: calc(50% - 5rem);
        display: inline-block;
        float: left;
      }
    `,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MapComponent,
    DefaultInteractionComponent,
    DefaultControlComponent,
    ViewComponent,
    CoordinateComponent,
    LayerTileComponent,
    SourceOsmComponent,
  ],
})
export class MapPositionComponent implements OnInit {
  private readonly fb = inject(NonNullableFormBuilder);

  @ViewChild('map', { static: true })
  map!: MapComponent;

  @ViewChild('view', { static: true })
  view!: ViewComponent;

  displayProj = new Projection({ code: 'EPSG:3857' });
  inputProj = new Projection({ code: 'EPSG:4326' });

  moving = false;

  currentZoom = 0;
  currentLon = 0;
  currentLat = 0;

  form!: FormGroup<MapPositionForm>;

  ngOnInit(): void {
    this.form = this.fb.group({
      x: 1.4886,
      y: 43.5554,
      zoom: 4,
    });
  }

  displayCoordinates(): void {
    this.moving = false;

    const view = this.view.instance;

    if (!view) {
      return;
    }

    this.currentZoom = view.getZoom() ?? 0;

    const center = view.getCenter();

    if (center) {
      [this.currentLon, this.currentLat] = transform(center, this.displayProj, this.inputProj);
    }
  }

  startMoving(): void {
    this.moving = true;
  }
}
