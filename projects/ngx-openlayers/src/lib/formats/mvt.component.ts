import { Component, forwardRef, Input } from '@angular/core';
import { FeatureClass } from 'ol/Feature';
import { MVT } from 'ol/format';
import { FormatComponent } from './format.component';

@Component({
  selector: 'aol-format-mvt',
  template: '',
  providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
})
export class FormatMVTComponent extends FormatComponent {
  @Input()
  featureClass: FeatureClass;
  @Input()
  geometryName: string;
  @Input()
  layerName: string;
  @Input()
  layers: string[];

  instance: MVT;

  constructor() {
    super();
    this.instance = new MVT(this);
  }
}
