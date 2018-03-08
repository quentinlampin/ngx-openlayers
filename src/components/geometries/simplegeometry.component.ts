import { Input, OnDestroy, OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';

export abstract class SimpleGeometryComponent implements OnInit, OnDestroy {
  public instance: ol.geom.SimpleGeometry;
  public componentType = 'simple-geometry';

  @Input() srid: string;

  constructor(protected map: MapComponent, protected host: FeatureComponent) {

  }

  ngOnInit() {
    this.host.instance.setGeometry(this.instance);
  }

  ngOnDestroy() {
    // this.host.instance.setGeometry(null);
  }
}
