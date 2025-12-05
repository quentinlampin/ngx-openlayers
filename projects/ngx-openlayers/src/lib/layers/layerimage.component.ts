import { Component } from '@angular/core';
import { Image } from 'ol/layer';
import ImageSource from 'ol/source/Image';
import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-image',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerImageComponent extends LayerComponent {
  source: ImageSource;
  instance = new Image(this);
}
