import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { source } from 'openlayers';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-vector',
  template: `<ng-content></ng-content>`,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }],
})
export class SourceVectorComponent extends SourceComponent implements OnInit {
  instance: source.Vector;
  @Input()
  overlaps: boolean;
  @Input()
  useSpatialIndex: boolean;
  @Input()
  wrapX: boolean;
  @Input()
  url: string;
  @Input()
  format: ol.format.Feature;
  @Input()
  strategy: ol.LoadingStrategy;

  constructor(@Host() layer: LayerVectorComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
