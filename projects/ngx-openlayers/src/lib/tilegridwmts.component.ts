import { Component, Input, OnInit } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';

@Component({
  selector: 'aol-tilegrid-wmts',
  template: '',
})
export class TileGridWMTSComponent extends TileGridComponent implements OnInit {
  instance: WMTS;

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
  tileSizes?: Size[];
  @Input()
  widths?: number[];

  ngOnInit() {
    this.instance = new WMTS(this);
  }
}
