import {Component, Input, Optional} from '@angular/core';
import {geom, style, StyleGeometryFunction} from 'openlayers';
import {FeatureComponent} from '../feature.component';
import {LayerVectorComponent} from '../layers';

@Component({
  selector: 'aol-style',
  template: `<ng-content></ng-content>`
})
export class StyleComponent {
  private host: FeatureComponent|LayerVectorComponent;
  public instance: style.Style;
  public componentType: string = 'style';

  @Input() geometry: string | geom.Geometry | StyleGeometryFunction;
  @Input() fill: style.Fill;
  @Input() image: style.Image;
  @Input() stroke: style.Stroke;
  @Input() text: style.Text;
  @Input() zIndex: number;

  constructor(@Optional() featureHost: FeatureComponent, @Optional() layerHost: LayerVectorComponent) {
    // console.log('creating aol-style');
    this.host = !!featureHost ? featureHost : layerHost;
    if (!this.host) {
      throw new Error('aol-style must be applied to a feature or a layer');
    }
  }
}
