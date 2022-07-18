import { Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent, ViewComponent } from 'ngx-openlayers';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { transform } from 'ol/proj';
import Projection from 'ol/proj/Projection';

@Component({
  selector: 'app-map-position',
  template: `
    <aol-map #map width="100%" height="100%" (moveStart)="startMoving()" (moveEnd)="displayCoordinates()">
      <aol-interaction-default></aol-interaction-default>
      <aol-control-defaults></aol-control-defaults>

      <aol-view #view [zoom]="form.get('zoom').value">
        <aol-coordinate [x]="form.get('x').value" [y]="form.get('y').value" srid="EPSG:4326"></aol-coordinate>
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
})
export class MapPositionComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder) {}

  @ViewChild('map', { static: true })
  map: MapComponent;
  @ViewChild('view', { static: true })
  view: ViewComponent;

  displayProj = new Projection({ code: 'EPSG:3857' });
  inputProj = new Projection({ code: 'EPSG:4326' });

  moving = false;
  currentZoom = 0;
  currentLon = 0;
  currentLat = 0;

  form: UntypedFormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      x: 1.4886,
      y: 43.5554,
      zoom: 4,
    });
  }

  displayCoordinates(): void {
    this.moving = false;
    this.currentZoom = this.view.instance.getZoom();
    [this.currentLon, this.currentLat] = transform(this.view.instance.getCenter(), this.displayProj, this.inputProj);
  }

  startMoving(): void {
    this.moving = true;
  }
}
