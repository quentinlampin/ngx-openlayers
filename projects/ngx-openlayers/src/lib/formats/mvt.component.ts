import { Component, forwardRef, Input } from '@angular/core';
import { MVT } from 'ol/format';
import { FormatComponent } from './format.component';
import RenderFeature from 'ol/render/Feature';
import { FeatureToFeatureClass } from 'ol/format/Feature';

@Component({
  selector: 'aol-format-mvt',
  template: '',
  providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
  standalone: true,
})
export class FormatMVTComponent extends FormatComponent {
  @Input()
  featureClass: FeatureToFeatureClass<RenderFeature>;
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
