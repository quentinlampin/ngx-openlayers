import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { geom, proj } from 'openlayers';

@Component({
  selector: 'aol-geometry-multipoint',
  template: `<ng-content></ng-content>`
})
export class GeometryMultiPointComponent extends SimpleGeometryComponent implements OnInit, OnDestroy {
  public componentType: string = 'geometry-multipoint';
  public instance: ol.geom.MultiPoint;

  constructor(map: MapComponent, host: FeatureComponent) {
    super(map, host);
    // console.log('creating aol-geometry-multipoint');
  }

  ngOnInit() {
    this.instance = new geom.MultiPoint([[0, 0], [1, 1]]);
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
