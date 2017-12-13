/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { ContentComponent } from './content.component';
export declare class OverlayComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    componentType: string;
    instance: ol.Overlay;
    element: Element;
    content: ContentComponent;
    id: number | string;
    offset: number[];
    positioning: ol.OverlayPositioning | string;
    stopEvent: boolean;
    insertFirst: boolean;
    autoPan: boolean;
    autoPanAnimation: olx.animation.PanOptions;
    autoPanMargin: number;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
