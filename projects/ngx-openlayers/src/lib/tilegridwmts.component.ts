import { Component, input, OnInit } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';

@Component({
  selector: 'aol-tilegrid-wmts',
  template: '',
  standalone: true,
})
export class TileGridWMTSComponent extends TileGridComponent implements OnInit {
  origins = input<Coordinate[]>();
  matrixIds = input<string[]>();
  sizes = input<Size[]>();
  tileSizes = input<Size[]>();

  instance?: WMTS;

  ngOnInit(): void {
    this.instance = new WMTS({
      origin: this.origin(),
      origins: this.origins(),
      resolutions: this.resolutions()!,
      matrixIds: this.matrixIds()!,
      sizes: this.sizes(),
      tileSizes: this.tileSizes(),
      extent: this.extent(),
      tileSize: this.tileSize(),
    });
  }
}
