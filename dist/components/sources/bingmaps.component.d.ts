/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceBingmapsComponent extends SourceComponent implements OnInit {
    protected mapSystem: any;
    instance: ol.source.BingMaps;
    cacheSize: number;
    hidpi: boolean;
    culture: string;
    key: string;
    imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey';
    maxZoom: number;
    reprojectionErrorThreshold: number;
    tileLoadFunction: ol.TileLoadFunctionType;
    wrapX: boolean;
    constructor(mapSystem: any, layer: LayerTileComponent);
    ngOnInit(): void;
}
