import { Component, forwardRef, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
import { Geometry } from 'ol/geom';
import GeometryType from 'ol/geom/GeometryType';

@Component({
  selector: 'aol-format-mvt',
  template: '',
  providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
})
export class FormatMVTComponent extends FormatComponent {
  instance: MVT;

  @Input()
  featureClass:
    | ((geom: Geometry | { [k: string]: any }) => any)
    | ((geom: GeometryType, arg2: number[], arg3: number[] | number[][], arg4: { [k: string]: any }) => any);
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
