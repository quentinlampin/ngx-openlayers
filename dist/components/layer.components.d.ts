/// <reference types="openlayers" />
import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { source, Extent } from 'openlayers';
import { MapComponent } from "./map.component";
export declare abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
    host: MapComponent;
    instance: any;
    componentType: string;
    opacity: number | undefined;
    visible: boolean | undefined;
    extent: Extent | undefined;
    zIndex: number | undefined;
    minResolution: number | undefined;
    maxResolution: number | undefined;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy {
    source: source.Tile;
    preload: number | undefined;
    useInterimTilesOnError: boolean | undefined;
    constructor(map: MapComponent);
    ngOnInit(): void;
}
export declare class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy {
    source: source.Vector;
    renderBuffer: number | undefined;
    constructor(map: MapComponent);
    ngOnInit(): void;
}
