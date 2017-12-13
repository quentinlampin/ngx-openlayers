/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class ControlRotateComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.control.Rotate;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
