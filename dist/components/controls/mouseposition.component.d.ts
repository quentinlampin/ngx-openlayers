/// <reference types="openlayers" />
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class ControlMousePositionComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    private element;
    instance: ol.control.MousePosition;
    coordinateFormat: ol.CoordinateFormatType;
    projection: ol.ProjectionLike;
    target: Element;
    constructor(mapSystem: any, map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
