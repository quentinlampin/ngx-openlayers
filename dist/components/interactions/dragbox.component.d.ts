/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { interaction, EventsConditionType, DragBoxEndConditionType } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DragBoxInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.DragBox;
    className: string;
    condition: EventsConditionType;
    boxEndCondition: DragBoxEndConditionType;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
