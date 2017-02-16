/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlFullScreenComponent implements OnInit, OnDestroy {
    private map;
    instance: control.FullScreen;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
