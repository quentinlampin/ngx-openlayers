/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlOverviewMapComponent implements OnInit, OnDestroy {
    private map;
    instance: control.OverviewMap;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
