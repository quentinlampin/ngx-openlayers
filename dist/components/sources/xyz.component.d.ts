/// <reference types="openlayers" />
import { AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
import { TileGridComponent } from '../tilegrid.component';
export declare class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
    protected mapSystem: any;
    instance: ol.source.XYZ;
    cacheSize: number;
    crossOrigin: string;
    opaque: boolean;
    projection: string;
    reprojectionErrorThreshold: number;
    minZoom: number;
    maxZoom: number;
    tileGrid: ol.tilegrid.TileGrid;
    tileLoadFunction?: ol.TileLoadFunctionType;
    tilePixelRatio: number;
    tileSize: number | ol.Size;
    tileUrlFunction: ol.TileUrlFunctionType;
    url: string;
    urls: string[];
    wrapX: boolean;
    tileGridXYZ: TileGridComponent;
    constructor(mapSystem: any, layer: LayerTileComponent);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
