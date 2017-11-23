import { Component, Host, Input, OnInit, forwardRef, Inject } from '@angular/core';
import { LayerVectorComponent } from '../layers';
import { SourceComponent } from './source.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-source-vector',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceVectorComponent) }
  ]
})
export class SourceVectorComponent extends SourceComponent implements OnInit {
  instance: ol.source.Vector;
  @Input() overlaps: boolean;
  @Input() useSpatialIndex: boolean;
  @Input() wrapX: boolean;
  @Input() url: string;
  @Input() format: ol.format.Feature;
  @Input() strategy: ol.LoadingStrategy;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerVectorComponent) {
    super(mapSystem, layer);
  }

  ngOnInit() {
    this.instance = new this.mapSystem.source.Vector(this);
    this.host.instance.setSource(this.instance);
  }
}
