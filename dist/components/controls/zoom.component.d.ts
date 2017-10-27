/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlZoomComponent implements OnInit, OnDestroy {
    private map;
    instance: control.Zoom;
    duration: number;
    zoomInLabel: (string | Node);
    zoomOutLabel: (string | Node);
    zoomInTipLabel: string;
    zoomOutTipLabel: string;
    delta: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
