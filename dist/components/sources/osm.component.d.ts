/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { source, AttributionLike, TileLoadFunctionType } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceOsmComponent extends SourceComponent implements OnInit {
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
    ngOnInit(): void;
}
