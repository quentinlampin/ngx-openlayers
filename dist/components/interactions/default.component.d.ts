/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { interaction, Collection } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DefaultInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: Collection<interaction.Interaction>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
