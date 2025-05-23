import {
  AfterContentInit,
  Component,
  ContentChild,
  forwardRef,
  Host,
  Input,
  OnChanges,
  SimpleChanges,
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
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }],
  standalone: true,
})
export class SourceClusterComponent extends SourceComponent implements AfterContentInit, OnChanges {
  @Input()
  distance: number;
  @Input()
  geometryFunction?: (feature: Feature) => Point;
  @Input()
  wrapX?: boolean;

  @ContentChild(SourceVectorComponent)
  sourceVectorComponent: SourceVectorComponent;
  source: Vector;
  instance: Cluster<Feature<Geometry>>;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngAfterContentInit(): void {
    this.source = this.sourceVectorComponent.instance;

    this.instance = new Cluster(this);
    this.host.instance.setSource(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance && changes.hasOwnProperty('distance')) {
      this.instance.setDistance(this.distance);
    }
  }
}
