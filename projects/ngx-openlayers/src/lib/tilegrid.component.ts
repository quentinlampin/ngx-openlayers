import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';

@Component({
  selector: 'aol-tilegrid',
  template: '',
})
export class TileGridComponent implements OnInit, OnChanges {
  @Input()
  extent: Extent;
  @Input()
  maxZoom: number;
  @Input()
  minZoom: number;
  @Input()
  tileSize: number | Size;
  @Input()
  origin?: Coordinate;
  @Input()
  resolutions: number[];

  instance: TileGrid;

  ngOnInit() {
    if (!this.resolutions) {
      this.instance = createXYZ(this);
    } else {
      this.instance = new TileGrid(this);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.resolutions) {
      this.instance = createXYZ(this);
    } else {
      this.instance = new TileGrid(this);
    }
  }
}
