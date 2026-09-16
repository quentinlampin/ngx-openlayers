import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import WebGLTileLayer, { Options } from 'ol/layer/WebGLTile';
import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-webgl',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerWebGlComponent extends LayerComponent implements OnInit, OnChanges {
  /**
   * Style to apply to the layer.
   */
  @Input()
  style?: Options['style'];

  /**
   * Preload. Load low-resolution tiles up to `preload` levels. `0`
   * means no preloading.
   */
  @Input()
  preload?: Options['preload'];

  /**
   * Use interim tiles on error.
   */
  @Input()
  useInterimTilesOnError?: Options['useInterimTilesOnError'];

  /**
   * The internal texture cache size. This needs to be large enough to render
   * two zoom levels worth of tiles.
   */
  @Input()
  cacheSize?: Options['cacheSize'];

  ngOnInit(): void {
    this.instance = new WebGLTileLayer(this);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    if (!this.instance) {
      return;
    }
    if (changes['style'] && !changes['style'].firstChange) {
      this.instance.setStyle(changes['style'].currentValue);
    }
  }
}
