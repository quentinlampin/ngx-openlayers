import { AfterViewInit, Component, ContentChildren, inject } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import { StyleComponent } from './style.component';

@Component({
  selector: 'aol-styles',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class StylesComponent implements AfterViewInit {
  @ContentChildren(StyleComponent) styles: StyleComponent[];

  private readonly host: FeatureComponent | LayerVectorComponent;

  constructor() {
    const featureHost = inject(FeatureComponent, { optional: true });
    const layerHost = inject(LayerVectorComponent, { optional: true });

    this.host = !!featureHost ? featureHost : layerHost;
    if (!this.host) {
      throw new Error('aol-styles must be applied to a feature or a layer');
    }
  }

  update(): void {
    this.host.instance.changed();
  }

  ngAfterViewInit(): void {
    this.host.instance.setStyle(this.styles.map(s => s.instance));
  }
}
