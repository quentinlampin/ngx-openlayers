/// <reference types="openlayers" />
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlComponent implements OnInit, OnDestroy {
    private map;
    componentType: string;
    instance: control.Control;
    element: Element;
    wrapper: ElementRef;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
