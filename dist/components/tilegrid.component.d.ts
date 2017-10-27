/// <reference types="openlayers" />
import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { tilegrid, Extent, Size, Coordinate } from 'openlayers';
export declare class TileGridComponent implements OnInit, OnChanges {
    instance: tilegrid.TileGrid;
    extent: Extent;
    maxZoom: number;
    minZoom: number;
    tileSize: number | Size;
    origin?: Coordinate;
    resolutions: number[];
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
