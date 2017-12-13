/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceTileWMSComponent extends SourceComponent implements OnInit {
    protected mapSystem: any;
    instance: ol.source.TileWMS;
    cacheSize: number;
    crossOrigin: string;
    gutter: number;
    hidpi: boolean;
    params: Object;
    projection: string;
    reprojectionErrorThreshold: number;
    serverType: string;
    tileGrid: ol.tilegrid.TileGrid;
    tileLoadFunction: ol.TileLoadFunctionType;
    url: string;
    urls: string[];
    wrapX: boolean;
    constructor(mapSystem: any, layer: LayerTileComponent);
    ngOnInit(): void;
}
