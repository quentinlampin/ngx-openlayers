import { Component, Input, OnInit } from '@angular/core';
import { tilegrid, Extent, Size } from 'openlayers';

@Component({
  selector: 'aol-tilegrid',
  template: ''
})
export class TileGridComponent implements OnInit {
  instance: tilegrid.TileGrid;

  @Input() extent: Extent;
  @Input() maxZoom: number;
  @Input() minZoom: number;
  @Input() tileSize: number|Size;

  ngOnInit() {
    this.instance = tilegrid.createXYZ(this);
  }
}
