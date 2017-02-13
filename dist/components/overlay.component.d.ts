/// <reference types="openlayers" />
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay, OverlayPositioning } from 'openlayers';
export declare class OverlayComponent implements OnInit, OnDestroy {
    private map;
    private elementRef;
    componentType: string;
    instance: Overlay;
    element: Element;
    id: number | string;
    offset: number[];
    positioning: OverlayPositioning | string;
    stopEvent: boolean;
    insertFirst: boolean;
    autoPan: boolean;
    autoPanAnimation: olx.animation.PanOptions;
    autoPanMargin: number;
    constructor(map: MapComponent, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
