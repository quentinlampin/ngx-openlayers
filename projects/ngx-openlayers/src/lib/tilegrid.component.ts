import { Component, effect, input } from '@angular/core';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';

@Component({
  selector: 'aol-tilegrid',
  template: '',
  standalone: true,
})
export class TileGridComponent {
  extent = input<Extent>();
  maxZoom = input<number>();
  minZoom = input<number>();
  tileSize = input<number | Size>();
  origin = input<Coordinate>();
  resolutions = input<number[]>();

  instance?: TileGrid;

  constructor() {
    effect(() => {
      this.buildInstance();
    });
  }

  protected buildInstance(): void {
    const resolutions = this.resolutions();

    if (!resolutions) {
      this.instance = createXYZ({
        extent: this.extent(),
        maxZoom: this.maxZoom(),
        minZoom: this.minZoom(),
        tileSize: this.tileSize(),
      });
    } else {
      this.instance = new TileGrid({
        extent: this.extent(),
        minZoom: this.minZoom(),
        tileSize: this.tileSize(),
        origin: this.origin(),
        resolutions,
      });
    }
  }
}
