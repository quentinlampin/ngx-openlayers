/// <reference types="openlayers" />
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { control, CoordinateFormatType, ProjectionLike } from 'openlayers';
import { MapComponent } from './map.component';
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
export declare class ControlFullScreenComponent extends control.FullScreen implements OnInit, OnDestroy {
    private map;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ControlMousePositionComponent implements OnInit, OnDestroy {
    private map;
    private element;
    instance: control.MousePosition;
    coordinateFormat: CoordinateFormatType;
    projection: ProjectionLike;
    target: Element;
    constructor(map: MapComponent, element: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ControlOverviewMapComponent extends control.OverviewMap implements OnInit, OnDestroy {
    private map;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ControlRotateComponent extends control.Rotate implements OnInit, OnDestroy {
    private map;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ControlScaleLineComponent extends control.ScaleLine implements OnInit, OnDestroy {
    private map;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ControlZoomComponent extends control.Zoom implements OnInit, OnDestroy {
    private map;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ControlZoomSliderComponent extends control.ZoomSlider implements OnInit, OnDestroy {
    private map;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class ControlZoomToExtentComponent extends control.ZoomToExtent implements OnInit, OnDestroy {
    private map;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
