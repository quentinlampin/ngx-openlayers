/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.interaction.DragRotate;
    condition: ol.EventsConditionType;
    duration: number;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
