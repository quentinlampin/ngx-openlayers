import {Component, Host, Input, OnInit, forwardRef, Inject} from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-source-imagestatic',
  template: `<ng-content></ng-content>`,
  providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }],
})
export class SourceImageStaticComponent extends SourceComponent implements OnInit {
  instance: ol.source.ImageStatic;

  @Input() projection: (ol.ProjectionLike | string);
  @Input() imageExtent: ol.Extent;
  @Input() url: string;
  @Input() attributions: ol.AttributionLike;
  @Input() crossOrigin?: string;
  @Input() imageLoadFunction?: ol.ImageLoadFunctionType;
  @Input() logo?: (string | olx.LogoOptions);
  @Input() imageSize?: ol.Size;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerImageComponent) {
    super(mapSystem, layer);
  }

  ngOnInit() {
    this.instance = this.mapSystem.source.ImageStatic(this);
    this.host.instance.setSource(this.instance);
  }
}
