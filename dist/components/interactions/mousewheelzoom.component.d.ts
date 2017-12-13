/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.interaction.MouseWheelZoom;
    duration: number;
    timeout: number;
    useAnchor: boolean;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
