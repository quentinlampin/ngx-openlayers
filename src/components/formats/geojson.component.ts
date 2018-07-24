import { Component, forwardRef, Input } from '@angular/core';
import { format, ProjectionLike } from 'openlayers';
import { FormatComponent } from './format.component';

@Component({
  selector: 'aol-format-geojson',
  template: '',
  providers: [
    { provide: FormatComponent, useExisting: forwardRef(() => FormatGeoJSONComponent) }
  ]
})
export class FormatGeoJSONComponent extends FormatComponent {
  instance: format.GeoJSON;
  
  @Input() defaultDataProjection: ProjectionLike = 'EPSG:4326';
  @Input() featureProjection: ProjectionLike;
  @Input() geometryName: string;

  constructor() {
    super();
    this.instance = new format.GeoJSON(this);
  }
}
