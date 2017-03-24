import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Feature } from 'openlayers';
import { SourceVectorComponent } from './sources';

@Component({
  selector: 'aol-feature',
  template: `<ng-content></ng-content>`
})
export class FeatureComponent implements OnInit, OnDestroy, OnChanges {
  public componentType = 'feature';
  public instance: Feature;

  @Input() id: string|number|undefined;

  constructor(private host: SourceVectorComponent) {
  }

  ngOnInit() {
    this.instance = new Feature();
    if (this.id !== undefined) {
      this.instance.setId(this.id);
    }
    this.host.instance.addFeature(this.instance);
  }

  ngOnDestroy() {
    this.host.instance.removeFeature(this.instance);
  }

  ngOnChanges() {
    if (this.instance) {
      this.instance.setId(this.id);
    }
  }
}
