/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
export declare class ControlComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    componentType: string;
    instance: ol.control.Control;
    element: Element;
    content: ContentComponent;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
