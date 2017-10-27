/// <reference types="openlayers" />
import { AfterContentInit } from '@angular/core';
import { source, AttributionLike, TileLoadFunctionType } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceXYZComponent } from './xyz.component';
export declare class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
    instance: source.OSM;
    attributions: AttributionLike;
    cacheSize: number;
    crossOrigin: string;
    maxZoom: number;
    opaque: boolean;
    reprojectionErrorThreshold: number;
    tileLoadFunction: TileLoadFunctionType;
    url: string;
    wrapX: boolean;
    constructor(layer: LayerTileComponent);
    ngAfterContentInit(): void;
}
