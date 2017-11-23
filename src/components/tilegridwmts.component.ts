import { Component, Inject, Input, OnInit } from '@angular/core';
import { TileGridComponent } from './tilegrid.component';
import { MapSystemToken } from '../map-system';

@Component({
    selector: 'aol-tilegrid-wmts',
    template: ''
})
export class TileGridWMTSComponent extends TileGridComponent implements OnInit {
  instance: ol.tilegrid.WMTS;

    @Input() origin?: ol.Coordinate;
    @Input() origins?: ol.Coordinate[];
    @Input() resolutions: number[];
    @Input() matrixIds: string[];
    @Input() sizes?: ol.Size[];
    @Input() tileSizes?: ((number | ol.Size)[]);
    @Input() widths?: number[];

    ngOnInit() {
        this.instance = new this.mapSystem.tilegrid.WMTS(this);
    }
}
