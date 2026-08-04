import { Component, forwardRef, inject, input, OnInit } from '@angular/core';
import { GeoJSON } from 'ol/format';
import FeatureFormat from 'ol/format/Feature';
import { ProjectionLike } from 'ol/proj';
import { Vector } from 'ol/source';

import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-geojson',
  template: `<ng-content></ng-content>`,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceGeoJSONComponent),
    },
  ],
  standalone: true,
})
export class SourceGeoJSONComponent extends SourceComponent implements OnInit {
  dataProjection = input<ProjectionLike>();
  featureProjection = input<ProjectionLike>();
  geometryName = input<string>();
  url = input<string>();

  override instance?: Vector;

  format!: FeatureFormat;

  readonly host = inject(LayerVectorComponent);

  ngOnInit(): void {
    this.format = new GeoJSON({
      dataProjection: this.dataProjection(),
      featureProjection: this.featureProjection(),
      geometryName: this.geometryName(),
    });

    this.instance = new Vector({
      url: this.url(),
      format: this.format,
    });

    this.host.instance?.setSource(this.instance);
  }
}
