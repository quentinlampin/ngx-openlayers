import { Component, Input, Optional, OnInit, Inject } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-style',
  template: `<ng-content></ng-content>`
})
export class StyleComponent implements OnInit {
  private host: FeatureComponent|LayerVectorComponent;
  public instance: ol.style.Style;
  public componentType: string = 'style';

  @Input() geometry: string | ol.geom.Geometry | ol.StyleGeometryFunction;
  @Input() fill: ol.style.Fill;
  @Input() image: ol.style.Image;
  @Input() stroke: ol.style.Stroke;
  @Input() text: ol.style.Text;
  @Input() zIndex: number;

  constructor(
    @Inject(MapSystemToken) protected mapSystem: any,
    @Optional() featureHost: FeatureComponent,
    @Optional() layerHost: LayerVectorComponent
  ) {
    // console.log('creating aol-style');
    this.host = !!featureHost ? featureHost : layerHost;
    if (!this.host) {
      throw new Error('aol-style must be applied to a feature or a layer');
    }
  }

  update() {
    // console.log('updating style\'s host: ', this.host);
    this.host.instance.changed();
  }

  ngOnInit() {
    // console.log('creating aol-style instance with: ', this);
    this.instance = new this.mapSystem.style.Style(this);
    this.host.instance.setStyle(this.instance);
  }
}
