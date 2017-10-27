/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control, Extent } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlZoomToExtentComponent implements OnInit, OnDestroy {
    private map;
    instance: control.ZoomToExtent;
    className: string;
    label: (string | Node);
    tipLabel: string;
    extent: Extent;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
