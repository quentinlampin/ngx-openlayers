/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { interaction, EventsConditionType, Kinetic } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DragPanInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.DragPan;
    condition: EventsConditionType;
    kinetic: Kinetic;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
