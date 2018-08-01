import { Component, forwardRef, Input } from '@angular/core';
import { format, geom } from 'openlayers';
import { FormatComponent } from './format.component';

@Component({
  selector: 'aol-format-mvt',
  template: '',
  providers: [{ provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }],
})
export class FormatMVTComponent extends FormatComponent {
  instance: format.MVT;

  @Input()
  featureClass:
    | ((geom: geom.Geometry | { [k: string]: any }) => any)
    | ((geom: geom.GeometryType, arg2: number[], arg3: number[] | number[][], arg4: { [k: string]: any }) => any);
  @Input()
  geometryName: string;
  @Input()
  layerName: string;
  @Input()
  layers: string[];

  constructor() {
    super();
    this.instance = new format.MVT(this);
  }
}
