import { Component, OnInit, forwardRef, input } from '@angular/core';
import { MVT } from 'ol/format';
import { FeatureToFeatureClass } from 'ol/format/Feature';
import RenderFeature from 'ol/render/Feature';

import { FormatComponent } from './format.component';

@Component({
  selector: 'aol-format-mvt',
  template: '',
  providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
  standalone: true,
})
export class FormatMVTComponent extends FormatComponent implements OnInit {
  featureClass = input<FeatureToFeatureClass<RenderFeature>>();
  geometryName = input<string>();
  layerName = input<string>();
  layers = input<string[]>();

  instance?: MVT;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.instance = new MVT({
      featureClass: this.featureClass(),
      geometryName: this.geometryName(),
      layerName: this.layerName(),
      layers: this.layers(),
    });
  }
}
