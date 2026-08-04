import { Component, forwardRef, inject, OnInit, input } from '@angular/core';
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
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceVectorComponent),
    },
  ],
  standalone: true,
})
export class SourceVectorComponent extends SourceComponent implements OnInit {
  overlaps = input<boolean>();
  useSpatialIndex = input<boolean>();
  wrapX = input<boolean>();
  url = input<string>();
  format = input<FeatureFormat>();
  strategy = input<LoadingStrategy>();

  /**
   * The loader function used to load features, from a remote source for example.
   * If this is not set and `url` is set, the source will create and use an XHR
   * feature loader. The `'featuresloadend'` and `'featuresloaderror'` events
   * will only fire if the `success` and `failure` callbacks are used.
   *
   * An extra argument is provided to the OpenLayers callback to enable retrieval
   * of the parent VectorSource.
   */
  loader =
    input<
      (
        extent: Extent,
        resolution: number,
        projection: Projection,
        success: ((features: Feature<Geometry>[]) => void) | undefined,
        failure: (() => void) | undefined,
        vectorSource: Vector | undefined
      ) => void
    >();

  instance?: Vector;
  host = inject(LayerVectorComponent);

  ngOnInit(): void {
    const loader = this.loader();

    this.instance = new Vector({
      overlaps: this.overlaps(),
      useSpatialIndex: this.useSpatialIndex(),
      wrapX: this.wrapX(),
      url: this.url(),
      format: this.format(),
      strategy: this.strategy(),
      loader: loader
        ? (extent, resolution, projection, success, failure) =>
            loader(extent, resolution, projection, success, failure, this.instance)
        : undefined,
    });

    this.host.instance.setSource(this.instance);
  }
}
