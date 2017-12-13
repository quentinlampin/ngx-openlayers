/// <reference types="openlayers" />
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class ControlAttributionComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    private element;
    componentType: string;
    instance: ol.control.Attribution;
    target: Element;
    collapsible: boolean;
    constructor(mapSystem: any, map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
