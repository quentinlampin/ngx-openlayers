/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class DefaultInteractionComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.Collection<ol.interaction.Interaction>;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
