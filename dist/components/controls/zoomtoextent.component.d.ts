/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class ControlZoomToExtentComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.control.ZoomToExtent;
    className: string;
    label: (string | Node);
    tipLabel: string;
    extent: ol.Extent;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
