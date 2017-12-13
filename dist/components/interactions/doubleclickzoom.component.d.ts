/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.interaction.DoubleClickZoom;
    duration: number;
    delta: number;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
