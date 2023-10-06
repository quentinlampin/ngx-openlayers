import { Directive, Input, OnInit } from '@angular/core';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';

@Directive()
export abstract class SimpleGeometryComponent implements OnInit {
  @Input() srid: string;

  instance: SimpleGeometry;
  componentType = 'simple-geometry';

  constructor(protected map: MapComponent, protected host: FeatureComponent) {}

  ngOnInit() {
    this.host.instance.setGeometry(this.instance);
  }
}
