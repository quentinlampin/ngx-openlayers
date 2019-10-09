import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import FeatureFormat from 'ol/format/Feature';
import Vector, { Options as VectorOptions } from 'ol/source/Vector';
import GeoJSON, { Options as GeoJSONOptions } from 'ol/format/GeoJSON';
import { ProjectionLike } from 'ol/proj';

@Component({
  selector: 'aol-source-geojson',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }],
})
export class SourceGeoJSONComponent extends SourceComponent implements OnInit, VectorOptions, GeoJSONOptions {
  instance: Vector;
  format: FeatureFormat;
  @Input()
  defaultDataProjection: ProjectionLike;
  @Input()
  featureProjection: ProjectionLike;
  @Input()
  geometryName: string;
  @Input()
  url: string;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit() {
    this.format = new GeoJSON(this);
    this.instance = new Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
