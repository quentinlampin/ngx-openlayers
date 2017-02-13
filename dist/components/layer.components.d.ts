/// <reference types="openlayers" />
import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { layer, source, Extent, style, StyleFunction } from 'openlayers';
import { MapComponent } from './map.component';
export declare abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
    protected host: MapComponent;
    instance: any;
    componentType: string;
    opacity: number;
    visible: boolean;
    extent: Extent;
    zIndex: number;
    minResolution: number;
    maxResolution: number;
    constructor(host: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy {
    source: source.Tile;
    preload: number;
    useInterimTilesOnError: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
}
export declare class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy {
    source: source.Vector;
    renderBuffer: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
}
export declare class LayerVectorTileComponent extends LayerComponent implements OnInit {
    source: source.VectorTile;
    renderBuffer: number;
    renderMode: layer.VectorTileRenderType | string;
    renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number;
    style: (style.Style | style.Style[] | StyleFunction);
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    visible: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
}
