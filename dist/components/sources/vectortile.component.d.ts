/// <reference types="openlayers" />
import { AfterContentInit } from '@angular/core';
import { LayerVectorTileComponent } from '../layers';
import { FormatComponent } from '../formats';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
export declare class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
    protected mapSystem: any;
    instance: ol.source.VectorTile;
    cacheSize: number;
    overlaps: boolean;
    projection: ol.ProjectionLike;
    tilePixelRatio: number;
    tileUrlFunction: ol.TileUrlFunctionType;
    url: string;
    urls: string[];
    wrapX: boolean;
    formatComponent: FormatComponent;
    format: ol.format.Feature;
    tileGridComponent: TileGridComponent;
    tileGrid: ol.tilegrid.TileGrid;
    constructor(mapSystem: any, layer: LayerVectorTileComponent);
    ngAfterContentInit(): void;
}
