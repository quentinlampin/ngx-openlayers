import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { Vector } from 'ol/source';
import Feature from 'ol/format/Feature';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { LoadingStrategy } from 'ol/source/Vector';

@Component({
  selector: 'aol-source-vector',
  template: ` <ng-content></ng-content> `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }],
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
  format: Feature;
  @Input()
  strategy: LoadingStrategy;

  instance: Vector;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
