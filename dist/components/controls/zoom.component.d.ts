/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class ControlZoomComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.control.Zoom;
    duration: number;
    zoomInLabel: (string | Node);
    zoomOutLabel: (string | Node);
    zoomInTipLabel: string;
    zoomOutTipLabel: string;
    delta: number;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
