import { Component, Host, Input, OnInit, forwardRef, Output, EventEmitter } from '@angular/core';
import { ProjectionLike, source, Extent, AttributionLike, ImageLoadFunctionType, Size } from 'openlayers';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';

@Component({
  selector: 'aol-source-imagestatic',
  template: `
    <ng-content></ng-content>
  `,
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

  @Output()
  onImageLoadStart = new EventEmitter<source.ImageEvent>();
  @Output()
  onImageLoadEnd = new EventEmitter<source.ImageEvent>();
  @Output()
  onImageLoadError = new EventEmitter<source.ImageEvent>();

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  ngOnInit() {
    this.instance = new source.ImageStatic(this);
    this.host.instance.setSource(this.instance);
    this.instance.on('imageloadstart', (event: source.ImageEvent) => this.onImageLoadStart.emit(event));
    this.instance.on('imageloadend', (event: source.ImageEvent) => this.onImageLoadEnd.emit(event));
    this.instance.on('imageloaderror', (event: source.ImageEvent) => this.onImageLoadError.emit(event));
  }
}
