import { Component, Host, OnDestroy } from '@angular/core';
import { Feature } from 'openlayers';
import {SourceVectorComponent} from "./source.components";

@Component({
  selector: 'aol-feature',
  template: `<ng-content></ng-content>`
})
export class FeatureComponent extends Feature implements OnDestroy{
  _host_: SourceVectorComponent;

  constructor(@Host() source: SourceVectorComponent){
    console.log('instancing aol-feature');
    super();
    this._host_ = source;
    source.instance.addFeature(this);
  }

  ngOnDestroy(){
    console.log('removing aol-feature');
    this._host_.instance.removeFeature(this);
  }
}
