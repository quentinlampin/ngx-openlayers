/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class DragAndDropInteractionComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.interaction.DragAndDrop;
    formatConstructors: ((n: ol.format.Feature) => any)[];
    projection: ol.ProjectionLike;
    target: Element;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
