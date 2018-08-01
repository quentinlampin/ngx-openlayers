import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { ProjectionLike, source, Extent, AttributionLike, ImageLoadFunctionType, Size } from 'openlayers';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';

@Component({
  selector: 'aol-source-imagestatic',
  template: `<ng-content></ng-content>`,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }],
})
export class SourceImageStaticComponent extends SourceComponent implements OnInit {
  instance: source.ImageStatic;

  @Input()
  projection: ProjectionLike | string;
  @Input()
  imageExtent: Extent;
  @Input()
  url: string;
  @Input()
  attributions: AttributionLike;
  @Input()
  crossOrigin?: string;
  @Input()
  imageLoadFunction?: ImageLoadFunctionType;
  @Input()
  logo?: string | olx.LogoOptions;
  @Input()
  imageSize?: Size;

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.ImageStatic(this);
    this.host.instance.setSource(this.instance);
  }
}
