import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { source, Size, TileUrlFunctionType, TileLoadFunctionType } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';

@Component({
  selector: 'aol-source-xyz',
  template: `<ng-content></ng-content>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent) }
  ]
})
export class SourceXYZComponent extends SourceComponent implements OnInit {
  instance: source.XYZ;
  @Input() cacheSize: number;
  @Input() crossOrigin: string;
  @Input() opaque: boolean;
  @Input() projection: string;
  @Input() reprojectionErrorThreshold: number;
  @Input() minZoom: number;
  @Input() maxZoom: number;
  @Input() tileLoadFunction?: TileLoadFunctionType;
  @Input() tilePixelRatio: number;
  @Input() tileSize: number|Size;
  @Input() tileUrlFunction: TileUrlFunctionType;
  @Input() url: string;
  @Input() urls: string[];
  @Input() wrapX: boolean;

  constructor(@Host() layer: LayerTileComponent) {
    super(layer);
  }

  ngOnInit() {
    // console.log('creating ol.source.XYZ instance with:', this);
    this.instance = new source.XYZ(this);
    this.host.instance.setSource(this.instance);
  }
}
