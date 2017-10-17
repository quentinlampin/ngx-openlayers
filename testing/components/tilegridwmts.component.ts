import {Component, Input} from '@angular/core';
import {Coordinate, Size, tilegrid} from 'openlayers';
import {TileGridComponent} from './tilegrid.component';

@Component({
    selector: 'aol-tilegrid-wmts',
    template: ''
})
export class TileGridWMTSComponent extends TileGridComponent {
    instance: tilegrid.WMTS;

    @Input() origin?: Coordinate;
    @Input() origins?: Coordinate[];
    @Input() resolutions: number[];
    @Input() matrixIds: string[];
    @Input() sizes?: Size[];
    @Input() tileSizes?: ((number | Size)[]);
    @Input() widths?: number[];
}
