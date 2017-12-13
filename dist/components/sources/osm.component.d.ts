/// <reference types="openlayers" />
import { AfterContentInit } from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceXYZComponent } from './xyz.component';
export declare class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
    protected mapSystem: any;
    instance: ol.source.OSM;
    attributions: ol.AttributionLike;
    cacheSize: number;
    crossOrigin: string;
    maxZoom: number;
    opaque: boolean;
    reprojectionErrorThreshold: number;
    tileLoadFunction: ol.TileLoadFunctionType;
    url: string;
    wrapX: boolean;
    constructor(mapSystem: any, layer: LayerTileComponent);
    ngAfterContentInit(): void;
}
