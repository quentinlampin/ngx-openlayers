/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class ControlFullScreenComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.control.FullScreen;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
