import { Component, Host, OnInit, OnDestroy } from '@angular/core';
import { Feature } from 'openlayers';
import { SourceVectorComponent } from "./source.components";

@Component({
  selector: 'aol-feature',
  template: `<ng-content></ng-content>`
})
export class FeatureComponent implements OnInit, OnDestroy{
  private host: SourceVectorComponent;
  public componentType: string;
  public instance: Feature;

  constructor(@Host() source: SourceVectorComponent){
    // console.log('instancing aol-feature');
    this.host = source;
    this.componentType = 'feature';
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
