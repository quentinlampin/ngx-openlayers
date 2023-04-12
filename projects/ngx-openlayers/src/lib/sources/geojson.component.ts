import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { Feature } from 'ol';
import { GeoJSON } from 'ol/format';
import { ProjectionLike } from 'ol/proj';
import { Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-geojson',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }],
})
export class SourceGeoJSONComponent extends SourceComponent implements OnInit {
  @Input()
  defaultDataProjection: ProjectionLike;
  @Input()
  featureProjection: ProjectionLike;
  @Input()
  geometryName: string;
  @Input()
  url: string;

  instance: Vector;
  format: Feature;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit() {
    this.format = new GeoJSON(this);
    this.instance = new Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
