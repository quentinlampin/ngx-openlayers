/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { interaction } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class PinchZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.PinchZoom;
    duration: number;
    constrainResolution: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
