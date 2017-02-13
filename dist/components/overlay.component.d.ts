/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay, OverlayPositioning } from 'openlayers';
import { ContentComponent } from './content.component';
export declare class OverlayComponent implements OnInit, OnDestroy {
    private map;
    componentType: string;
    instance: Overlay;
    element: Element;
    content: ContentComponent;
    id: number | string;
    offset: number[];
    positioning: OverlayPositioning | string;
    stopEvent: boolean;
    insertFirst: boolean;
    autoPan: boolean;
    autoPanAnimation: olx.animation.PanOptions;
    autoPanMargin: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
