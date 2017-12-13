/// <reference types="openlayers" />
import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class TileGridComponent implements OnInit, OnChanges {
    protected mapSystem: any;
    instance: ol.tilegrid.TileGrid;
    extent: ol.Extent;
    maxZoom: number;
    minZoom: number;
    tileSize: number | ol.Size;
    origin?: ol.Coordinate;
    resolutions: number[];
    constructor(mapSystem: any);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
