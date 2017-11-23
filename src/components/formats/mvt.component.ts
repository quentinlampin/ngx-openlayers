import { Component, forwardRef, Inject, Input } from '@angular/core';
import { FormatComponent } from './format.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-format-mvt',
  template: '',
  providers: [
    { provide: FormatComponent, useExisting: forwardRef(() => FormatMVTComponent) }
  ]
})
export class FormatMVTComponent extends FormatComponent {
  instance: ol.format.MVT;

  @Input() featureClass: (((geom: (ol.geom.Geometry | { [k: string]: any })) => any) |
    ((geom: ol.geom.GeometryType, arg2: number[], arg3: (number[] | number[][]), arg4: { [k: string]: any }) => any));
  @Input() geometryName: string;
  @Input() layerName: string;
  @Input() layers: string[];

  constructor(@Inject(MapSystemToken) protected mapSystem: any) {
    super();
    this.instance = new this.mapSystem.format.MVT(this);
  }
}
