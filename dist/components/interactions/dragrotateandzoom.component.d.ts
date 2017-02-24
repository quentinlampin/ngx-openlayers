/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { interaction, EventsConditionType } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.DragRotate;
    condition: EventsConditionType;
    duration: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
