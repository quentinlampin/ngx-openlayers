/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { interaction } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.MouseWheelZoom;
    duration: number;
    timeout: number;
    useAnchor: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
