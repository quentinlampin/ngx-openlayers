import {
  Component,
  Host,
  Input,
  forwardRef,
  ContentChild,
  AfterContentInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Feature } from 'ol';
import { LayerVectorComponent } from '../layers/layervector.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';
import { Cluster, Vector } from 'ol/source';
import { Point } from 'ol/geom';

@Component({
  selector: 'aol-source-cluster',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceClusterComponent) }],
})
export class SourceClusterComponent extends SourceComponent implements AfterContentInit, OnChanges {
  instance: Cluster;

  @Input()
  distance: number;
  @Input()
  geometryFunction?: (feature: Feature) => Point;
  @Input()
  wrapX?: boolean;

  @ContentChild(SourceVectorComponent, { static: false })
  sourceVectorComponent: SourceVectorComponent;
  source: Vector;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngAfterContentInit() {
    this.source = this.sourceVectorComponent.instance;

    this.instance = new Cluster(this);
    this.host.instance.setSource(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.instance && changes.hasOwnProperty('distance')) {
      this.instance.setDistance(this.distance);
    }
  }
}
