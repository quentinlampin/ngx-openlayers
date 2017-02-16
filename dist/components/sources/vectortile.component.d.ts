/// <reference types="openlayers" />
import { AfterContentInit } from '@angular/core';
import { source, ProjectionLike, TileUrlFunctionType, format, tilegrid } from 'openlayers';
import { LayerVectorTileComponent } from '../layers';
import { FormatComponent } from '../formats';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
export declare class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
    instance: source.VectorTile;
    cacheSize: number;
    overlaps: boolean;
    projection: ProjectionLike;
    tilePixelRatio: number;
    tileUrlFunction: TileUrlFunctionType;
    url: string;
    urls: string[];
    wrapX: boolean;
    formatComponent: FormatComponent;
    format: format.Feature;
    tileGridComponent: TileGridComponent;
    tileGrid: tilegrid.TileGrid;
    constructor(layer: LayerVectorTileComponent);
    ngAfterContentInit(): void;
}
