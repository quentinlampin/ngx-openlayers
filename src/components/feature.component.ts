import { Component, OnInit, OnDestroy } from '@angular/core';
import { Feature } from 'openlayers';
import { SourceVectorComponent } from './sources';

@Component({
  selector: 'aol-feature',
  template: `<ng-content></ng-content>`
})
export class FeatureComponent implements OnInit, OnDestroy {
  public componentType = 'feature';
  public instance: Feature;

  constructor(private host: SourceVectorComponent) {
    // console.log('instancing aol-feature');
  }

  ngOnInit() {
    this.instance = new Feature();
    this.host.instance.addFeature(this.instance);
  }

  ngOnDestroy() {
    // console.log('removing aol-feature');
    this.host.instance.removeFeature(this);
  }
}
