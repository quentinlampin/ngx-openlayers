import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { FeatureClass } from 'ol/Feature';
import MVT, { Options as MVTOptions } from 'ol/format/MVT';

@Component({
  selector: 'aol-format-mvt',
  template: '',
  providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
})
export class FormatMVTComponent extends FormatComponent implements MVTOptions {
  instance: MVT;

  @Input()
  featureClass: FeatureClass;
  @Input()
  geometryName: string;
  @Input()
  layerName: string;
  @Input()
  layers: string[];

  constructor() {
    super();
    this.instance = new MVT(this);
  }
}
