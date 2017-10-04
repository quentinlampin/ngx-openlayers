import {Component, Input} from '@angular/core';
import {Extent, Size, tilegrid} from 'openlayers';

@Component({
  selector: 'aol-tilegrid',
  template: ''
})
export class TileGridComponent {
  instance: tilegrid.TileGrid;

  @Input() extent: Extent;
  @Input() maxZoom: number;
  @Input() minZoom: number;
  @Input() tileSize: number|Size;
}
