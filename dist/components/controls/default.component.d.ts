/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control, Collection } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DefaultControlComponent implements OnInit, OnDestroy {
    private map;
    instance: Collection<control.Control>;
    attribution: boolean;
    attributionOptions: olx.control.AttributionOptions;
    rotate: boolean;
    rotateOptions: olx.control.RotateOptions;
    zoom: boolean;
    zoomOptions: olx.control.ZoomOptions;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
