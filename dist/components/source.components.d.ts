/// <reference types="openlayers" />
import { OnDestroy, OnInit, AfterContentInit } from '@angular/core';
import { AttributionLike, Size, ProjectionLike, TileUrlFunctionType, format, tilegrid } from 'openlayers';
import { LayerTileComponent, LayerVectorComponent, LayerComponent, LayerVectorTileComponent } from './layer.components';
import { FormatComponent } from './format.component';
import { TileGridComponent } from './tilegrid.component';
export declare class SourceComponent implements OnInit, OnDestroy {
    host: LayerComponent;
    instance: any;
    componentType: string;
    constructor(layer: LayerComponent);
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
    attributions: AttributionLike | undefined;
    overlaps: boolean | undefined;
    useSpatialIndex: boolean | undefined;
    wrapX: boolean | undefined;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
}
export declare class SourceXYZComponent extends SourceComponent implements OnInit {
    cacheSize: number;
    crossOrigin: string;
    opaque: boolean;
    projection: string | undefined;
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
