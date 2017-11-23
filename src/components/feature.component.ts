import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges, Inject } from '@angular/core';
import { SourceVectorComponent } from './sources';
import { MapSystemToken } from '../map-system';

@Component({
  selector: 'aol-feature',
  template: `<ng-content></ng-content>`
})
export class FeatureComponent implements OnInit, OnDestroy, OnChanges {
  public componentType = 'feature';
  public instance: ol.Feature;

  @Input() id: string|number|undefined;

  constructor(@Inject(MapSystemToken) protected mapSystem: any,
              private host: SourceVectorComponent) {
  }

  ngOnInit() {
    this.instance = new this.mapSystem.Feature();
    if (this.id !== undefined) {
      this.instance.setId(this.id);
    }
    this.host.instance.addFeature(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.removeFeature(this.instance);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.instance) {
      this.instance.setId(this.id);
    }
  }
}
