/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { source, Size, TileUrlFunctionType } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceXYZComponent extends SourceComponent implements OnInit {
    instance: source.XYZ;
    cacheSize: number;
    crossOrigin: string;
    opaque: boolean;
    projection: string;
    reprojectionErrorThreshold: number;
    minZoom: number;
    maxZoom: number;
    tilePixelRatio: number;
    tileSize: number | Size;
    tileUrlFunction: TileUrlFunctionType;
    url: string;
    urls: string[];
    wrapX: boolean;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
