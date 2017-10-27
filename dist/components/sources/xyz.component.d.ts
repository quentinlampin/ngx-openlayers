/// <reference types="openlayers" />
import { AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { source, Size, TileUrlFunctionType, TileLoadFunctionType, tilegrid } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
import { TileGridComponent } from '../tilegrid.component';
export declare class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
    instance: source.XYZ;
    cacheSize: number;
    crossOrigin: string;
    opaque: boolean;
    projection: string;
    reprojectionErrorThreshold: number;
    minZoom: number;
    maxZoom: number;
    tileGrid: tilegrid.TileGrid;
    tileLoadFunction?: TileLoadFunctionType;
    tilePixelRatio: number;
    tileSize: number | Size;
    tileUrlFunction: TileUrlFunctionType;
    url: string;
    urls: string[];
    wrapX: boolean;
    tileGridXYZ: TileGridComponent;
    constructor(layer: LayerTileComponent);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
