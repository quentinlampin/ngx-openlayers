/// <reference types="openlayers" />
import { OnDestroy, OnInit, AfterContentInit } from '@angular/core';
import { AttributionLike, Size, ProjectionLike, TileUrlFunctionType, format, tilegrid } from 'openlayers';
import { LayerTileComponent, LayerVectorComponent, LayerComponent, LayerVectorTileComponent } from './layers';
import { FormatComponent } from './format.component';
import { TileGridComponent } from './tilegrid.component';
export declare class SourceComponent implements OnInit, OnDestroy {
    protected host: LayerComponent;
    instance: any;
    componentType: string;
    constructor(host: LayerComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class SourceOsmComponent extends SourceComponent implements OnInit {
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
export declare class SourceBingmapsComponent extends SourceComponent implements OnInit {
    key: string;
    imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey';
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
export declare class SourceVectorComponent extends SourceComponent implements OnInit {
    attributions: AttributionLike;
    overlaps: boolean;
    useSpatialIndex: boolean;
    wrapX: boolean;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
}
export declare class SourceXYZComponent extends SourceComponent implements OnInit {
    attributions: AttributionLike;
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
export declare class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
    attributions: AttributionLike;
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
