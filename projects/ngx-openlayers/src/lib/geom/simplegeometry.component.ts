import { Directive, Input, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import SimpleGeometry from 'ol/geom/SimpleGeometry';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class SimpleGeometryComponent implements OnInit {
  public instance: SimpleGeometry;
  public componentType = 'simple-geometry';

  @Input() srid: string;

  constructor(protected map: MapComponent, protected host: FeatureComponent) {}

  ngOnInit() {
    this.host.instance.setGeometry(this.instance);
  }
}
