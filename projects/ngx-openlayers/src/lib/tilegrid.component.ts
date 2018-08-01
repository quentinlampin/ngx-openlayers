import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { tilegrid, Extent, Size, Coordinate } from 'openlayers';

@Component({
  selector: 'aol-tilegrid',
  template: '',
})
export class TileGridComponent implements OnInit, OnChanges {
  instance: tilegrid.TileGrid;

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

  ngOnInit() {
    if (!this.resolutions) {
      this.instance = tilegrid.createXYZ(this);
    } else {
      this.instance = new tilegrid.TileGrid(this);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.resolutions) {
      this.instance = tilegrid.createXYZ(this);
    } else {
      this.instance = new tilegrid.TileGrid(this);
    }
  }
}
