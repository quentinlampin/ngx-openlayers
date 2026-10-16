import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Image } from 'ol/layer';
import ImageSource from 'ol/source/Image';
import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-image',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LayerImageComponent extends LayerComponent implements OnInit {
  source: ImageSource;

  ngOnInit(): void {
    this.instance = new Image(this);
    super.ngOnInit();
  }
}
