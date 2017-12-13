/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class DefaultControlComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.Collection<ol.control.Control>;
    attribution: boolean;
    attributionOptions: olx.control.AttributionOptions;
    rotate: boolean;
    rotateOptions: olx.control.RotateOptions;
    zoom: boolean;
    zoomOptions: olx.control.ZoomOptions;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
