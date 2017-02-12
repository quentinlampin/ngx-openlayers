/// <reference types="openlayers" />
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { control, CoordinateFormatType, ProjectionLike } from 'openlayers';
import { MapComponent } from '../map.component';
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
