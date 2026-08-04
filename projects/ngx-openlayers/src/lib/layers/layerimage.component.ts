import { Component, OnInit } from '@angular/core';
import { Image } from 'ol/layer';
import ImageSource from 'ol/source/Image';

import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-image',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerImageComponent extends LayerComponent implements OnInit {
  source!: ImageSource;

  ngOnInit(): void {
    this.instance = new Image({
      opacity: this.opacity(),
      visible: this.visible(),
      extent: this.extent(),
      zIndex: this.zIndex(),
      minResolution: this.minResolution(),
      maxResolution: this.maxResolution(),
      minZoom: this.minZoom(),
      maxZoom: this.maxZoom(),
      source: this.source,
      properties: this.properties,
    });

    super.ngOnInit();
  }
}
