/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlRotateComponent extends control.Rotate implements OnInit, OnDestroy {
    private map;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
