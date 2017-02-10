/// <reference types="openlayers" />
import { OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { View, Extent } from 'openlayers';
import { MapComponent } from './map.component';
export declare class ViewComponent implements OnInit, OnChanges, OnDestroy {
    private host;
    instance: View;
    componentType: string;
    constrainRotation: boolean | number | undefined;
    enableRotation: boolean | undefined;
    extent: Extent | undefined;
    maxResolution: number | undefined;
    minResolution: number | undefined;
    maxZoom: number | undefined;
    minZoom: number | undefined;
    resolution: number | undefined;
    resolutions: number[] | undefined;
    rotation: number | undefined;
    zoom: number | undefined;
    zoomFactor: number | undefined;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
