import {
  AfterContentInit,
  Component,
  ContentChild,
  input,
  OnChanges,
  SimpleChanges,
  forwardRef,
  inject,
} from '@angular/core';

import { Feature } from 'ol';
import { Geometry, Point } from 'ol/geom';
import { Cluster, Vector } from 'ol/source';

import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';

@Component({
  selector: 'aol-source-cluster',
  template: ` <ng-content></ng-content> `,
  providers: [
    {
      provide: SourceComponent,
      useExisting: forwardRef(() => SourceClusterComponent),
    },
  ],
  standalone: true,
})
export class SourceClusterComponent extends SourceComponent implements AfterContentInit, OnChanges {
  distance = input.required<number>();
  geometryFunction = input<(feature: Feature) => Point>();
  wrapX = input<boolean>();

  @ContentChild(SourceVectorComponent)
  sourceVectorComponent!: SourceVectorComponent;

  source?: Vector;

  instance?: Cluster<Feature<Geometry>>;

  host = inject(LayerVectorComponent);

  ngAfterContentInit(): void {
    this.source = this.sourceVectorComponent.instance;

    this.instance = new Cluster({
      distance: this.distance(),
      geometryFunction: this.geometryFunction(),
      source: this.source,
      wrapX: this.wrapX(),
    });

    this.host.instance?.setSource(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance && changes['distance']) {
      this.instance.setDistance(this.distance());
    }
  }
}
