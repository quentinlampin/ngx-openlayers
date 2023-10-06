import { Component, Input, OnChanges, OnInit, Optional, SimpleChanges } from '@angular/core';
import { Extent } from 'ol/extent';
import { Image } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'aol-layer-image',
  template: ` <ng-content></ng-content> `,
})
export class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
  @Input()
  opacity: number;
  @Input()
  visible: boolean;
  @Input()
  extent: Extent;
  @Input()
  minResolution: number;
  @Input()
  maxResolution: number;
  @Input()
  zIndex: number;

  source: Image;

  constructor(map: MapComponent, @Optional() group?: LayerGroupComponent) {
    super(group || map);
  }

  ngOnInit() {
    this.instance = new Image(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }
}
