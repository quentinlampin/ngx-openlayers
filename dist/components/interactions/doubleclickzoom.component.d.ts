/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { interaction } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.DoubleClickZoom;
    duration: number;
    delta: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
