/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class ControlScaleLineComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.control.ScaleLine;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
