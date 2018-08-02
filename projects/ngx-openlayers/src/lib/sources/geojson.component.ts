import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { source, ProjectionLike, format } from 'openlayers';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-geojson',
  template: `<ng-content></ng-content>`,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent) }],
})
export class SourceGeoJSONComponent extends SourceComponent implements OnInit {
  instance: source.Vector;
  format: format.Feature;
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
    this.format = new format.GeoJSON(this);
    this.instance = new source.Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
