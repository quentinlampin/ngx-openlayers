import {Component, forwardRef, Host, Input} from '@angular/core';
import {Size, source, TileUrlFunctionType} from 'openlayers';
import {LayerTileComponent} from '../layers';
import {SourceComponent} from './source.component';

@Component({
  selector: 'aol-source-xyz',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }
  ]
})
export class SourceXYZComponent extends SourceComponent {
  instance: source.XYZ;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() opaque: boolean;
  @Input() projection: string;
  @Input() reprojectionErrorThreshold: number;
  @Input() minZoom: number;
  @Input() maxZoom: number;
  @Input() tilePixelRatio: number;
  @Input() tileSize: number|Size;
  @Input() tileUrlFunction: TileUrlFunctionType;
  @Input() url: string;
  @Input() urls: string[];
  @Input() wrapX: boolean;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }
}
