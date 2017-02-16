/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlZoomSliderComponent implements OnInit, OnDestroy {
    private map;
    instance: control.ZoomSlider;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
