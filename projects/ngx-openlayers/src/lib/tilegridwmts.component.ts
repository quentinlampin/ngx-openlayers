import { Component, Input, OnInit } from '@angular/core';
import { tilegrid, Size, Coordinate } from 'openlayers';
import { TileGridComponent } from './tilegrid.component';

@Component({
  selector: 'aol-tilegrid-wmts',
  template: '',
})
export class TileGridWMTSComponent extends TileGridComponent implements OnInit {
  instance: tilegrid.WMTS;

  @Input()
  origin?: Coordinate;
  @Input()
  origins?: Coordinate[];
  @Input()
  resolutions: number[];
  @Input()
  matrixIds: string[];
  @Input()
  sizes?: Size[];
  @Input()
  tileSizes?: (number | Size)[];
  @Input()
  widths?: number[];

  ngOnInit() {
    this.instance = new tilegrid.WMTS(this);
  }
}
