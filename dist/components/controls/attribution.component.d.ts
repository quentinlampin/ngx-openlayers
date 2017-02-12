/// <reference types="openlayers" />
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlAttributionComponent implements OnInit, OnDestroy {
    private map;
    private element;
    componentType: string;
    instance: control.Attribution;
    target: Element;
    collapsible: boolean;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
