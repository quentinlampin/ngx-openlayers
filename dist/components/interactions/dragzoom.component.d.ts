/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { interaction, EventsConditionType } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DragZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.DragZoom;
    className: string;
    condition: EventsConditionType;
    duration: number;
    out: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
