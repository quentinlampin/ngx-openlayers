/// <reference types="openlayers" />
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlComponent implements OnInit, OnDestroy {
    private map;
    private elementRef;
    componentType: string;
    instance: control.Control;
    element: Element;
    constructor(map: MapComponent, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
