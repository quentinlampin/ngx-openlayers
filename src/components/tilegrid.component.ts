import { Component, Inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapSystemToken } from '../map-system';

@Component({
  selector: 'aol-tilegrid',
  template: ''
})
export class TileGridComponent implements OnInit, OnChanges {
  instance: ol.tilegrid.TileGrid;

  @Input() extent: ol.Extent;
  @Input() maxZoom: number;
  @Input() minZoom: number;
  @Input() tileSize: number|ol.Size;
  @Input() origin?: ol.Coordinate;
  @Input() resolutions: number[];

  constructor(@Inject(MapSystemToken) protected mapSystem: any) {}

  ngOnInit() {
    if (!this.resolutions) {
      this.instance = this.mapSystem.tilegrid.createXYZ(this)
    } else {
      this.instance = new this.mapSystem.tilegrid.TileGrid(this);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.resolutions) {
      this.instance = this.mapSystem.tilegrid.createXYZ(this)
    } else {
      this.instance = new this.mapSystem.tilegrid.TileGrid(this);
    }
  }
}
