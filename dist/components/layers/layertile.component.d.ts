/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
export declare class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    source: ol.source.Tile;
    preload: number;
    useInterimTilesOnError: boolean;
    constructor(mapSystem: any, map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
}
