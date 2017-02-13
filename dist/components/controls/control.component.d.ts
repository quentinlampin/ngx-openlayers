/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
export declare class ControlComponent implements OnInit, OnDestroy {
    private map;
    componentType: string;
    instance: control.Control;
    element: Element;
    content: ContentComponent;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
