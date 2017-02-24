/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { interaction, format, ProjectionLike } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DragAndDropInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.DragAndDrop;
    formatConstructors: ((n: format.Feature) => any)[];
    projection: ProjectionLike;
    target: Element;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
