import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';

@Component({
  selector: 'aol-tilegrid-wmts',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TileGridWMTSComponent extends TileGridComponent implements OnInit {
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

  instance?: WMTS;

  ngOnInit(): void {
    this.instance = new WMTS(this);
  }
}
