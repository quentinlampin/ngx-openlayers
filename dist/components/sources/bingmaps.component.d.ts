/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { source, TileLoadFunctionType } from 'openlayers';
import { LayerTileComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceBingmapsComponent extends SourceComponent implements OnInit {
    instance: source.BingMaps;
    cacheSize: number;
    hidpi: boolean;
    culture: string;
    key: string;
    imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey';
    maxZoom: number;
    reprojectionErrorThreshold: number;
    tileLoadFunction: TileLoadFunctionType;
    wrapX: boolean;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
