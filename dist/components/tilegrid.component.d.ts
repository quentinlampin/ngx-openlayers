/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { tilegrid, Extent, Size } from 'openlayers';
export declare class TileGridComponent implements OnInit {
    instance: tilegrid.TileGrid;
    extent: Extent;
    maxZoom: number;
    minZoom: number;
    tileSize: number | Size;
    ngOnInit(): void;
}
