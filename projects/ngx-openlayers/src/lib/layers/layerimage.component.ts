import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { Image } from 'ol/layer';
import ImageSource from 'ol/source/Image';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';

@Component({
  selector: 'aol-layer-image',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
  source: ImageSource;

  constructor() {
    const map = inject(MapComponent);
    const group = inject(LayerGroupComponent, { optional: true });

    super(group || map);
  }

  ngOnInit(): void {
    this.instance = new Image(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }
}
