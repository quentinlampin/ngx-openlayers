import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { Feature } from 'ol';
import { Vector } from 'ol/source';
import { GeoJSON } from 'ol/format';
import { ProjectionLike } from 'ol/proj';

@Component({
  selector: 'aol-source-geojson',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }],
})
export class SourceGeoJSONComponent extends SourceComponent implements OnInit {
  instance: Vector;
  format: Feature;
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
