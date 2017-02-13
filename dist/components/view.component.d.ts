/// <reference types="openlayers" />
import { OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { View, Extent } from 'openlayers';
import { MapComponent } from './map.component';
export declare class ViewComponent implements OnInit, OnChanges, OnDestroy {
    private host;
    instance: View;
    componentType: string;
    constrainRotation: boolean | number;
    enableRotation: boolean;
    extent: Extent;
    maxResolution: number;
    minResolution: number;
    maxZoom: number;
    minZoom: number;
    resolution: number;
    resolutions: number[];
    rotation: number;
    zoom: number;
    zoomFactor: number;
    constructor(host: MapComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
