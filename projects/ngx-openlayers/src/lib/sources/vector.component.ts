import { Component, forwardRef, Host, Input, OnInit } from '@angular/core';
import { Vector } from 'ol/source';
import { default as FeatureFormat } from 'ol/format/Feature';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { LoadingStrategy } from 'ol/source/Vector';
import { Geometry } from 'ol/geom';
import { Extent } from 'ol/extent';
import { Projection } from 'ol/proj';
import { Feature } from 'ol';

@Component({
    selector: 'aol-source-vector',
    template: ` <ng-content></ng-content> `,
    providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }],
    standalone: true,
})
export class SourceVectorComponent extends SourceComponent implements OnInit {
  @Input()
  overlaps: boolean;
  @Input()
  useSpatialIndex: boolean;
  @Input()
  wrapX: boolean;
  @Input()
  url: string;
  @Input()
  format: FeatureFormat;
  @Input()
  strategy: LoadingStrategy;

  /**
   * The loader function used to load features, from a remote source for example.
   * If this is not set and `url` is set, the source will create and use an XHR
   * feature loader. The `'featuresloadend'` and `'featuresloaderror'` events
   * will only fire if the `success` and `failure` callbacks are used.
   *
   * An extra argument is provided to the OpenLayers callback to enable retrieval
   * of the parent VectorSource.
   */
  @Input()
  loader: (
    extent: Extent,
    resolution: number,
    projection: Projection,
    success: (geos: Feature<Geometry>[]) => void,
    failure: () => void,
    vectorSource: Vector
  ) => void;

  instance: Vector;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit(): void {
    this.instance = new Vector({
      ...this,
      loader: this.loader
        ? (extent, resolution, projection, success, failure) =>
            this.loader(extent, resolution, projection, success, failure, this.instance)
        : undefined,
    });

    this.host.instance.setSource(this.instance);
  }
}
