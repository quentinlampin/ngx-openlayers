import { Component, forwardRef, Host, Input, OnInit } from '@angular/core';
import { source, ProjectionLike, Attribution, ImageLoadFunctionType } from 'openlayers';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-imagearcgisrest',
  template: `
    <ng-content></ng-content>
  `,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageArcGISRestComponent) }],
})
export class SourceImageArcGISRestComponent extends SourceComponent implements OnInit {
  instance: source.ImageArcGISRest;

  @Input() projection: ProjectionLike | string;
  @Input() url: string;
  @Input() attributions: Attribution[];
  @Input() crossOrigin?: string;
  @Input() imageLoadFunction?: ImageLoadFunctionType;
  @Input() params?: { [k: string]: any };
  @Input() ratio = 1;
  @Input() resolutions?: number[];
  @Input() logo?: string | olx.LogoOptions;
  @Input() wrapX?: boolean;

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.ImageArcGISRest(this);
    this.host.instance.setSource(this.instance);
  }
}
