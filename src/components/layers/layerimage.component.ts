import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Extent, layer, source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-image',
  template: `<ng-content></ng-content>`
})
export class LayerImageComponent extends LayerComponent implements OnInit {
  public source: source.Image;

  @Input() opacity: number;
  @Input() visible: boolean;
  @Input() extent: Extent;
  @Input() minResolution: number;
  @Input() maxResolution: number;
  @Input() zIndex: number;

  constructor(map: MapComponent) {
    super(map);
  }

  ngOnInit() {
    this.instance = new layer.Image(this);
    super.ngOnInit();
  }
}
