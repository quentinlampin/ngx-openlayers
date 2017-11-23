import { Component, Host, Input, OnInit, forwardRef, Inject } from '@angular/core';
import { LayerImageComponent } from '../layers';
import { SourceComponent } from './source.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-source-imagewms',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceImageWMSComponent) }
  ]
})
export class SourceImageWMSComponent extends SourceComponent implements OnInit {
  instance: ol.source.ImageWMS;

  @Input() attributions: ol.AttributionLike;
  @Input() crossOrigin: string;
  @Input() hidpi: boolean;
  @Input() serverType: string;
  @Input() imageLoadFunction?: ol.ImageLoadFunctionType;
  @Input() logo: (string | olx.LogoOptions);
  @Input() params: Object;
  @Input() projection: (ol.ProjectionLike | string);
  @Input() ratio: number;
  @Input() resolutions: Array<number>;
  @Input() url: string;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, @Host() layer: LayerImageComponent) {
    super(mapSystem, layer);
  }

  ngOnInit() {
    this.instance = new this.mapSystem.source.ImageWMS(this);
    this.host.instance.setSource(this.instance);
  }
}
