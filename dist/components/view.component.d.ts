/// <reference types="openlayers" />
import { OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { MapComponent } from './map.component';
export declare class ViewComponent implements OnInit, OnChanges, OnDestroy {
    protected mapSystem: any;
    private host;
    instance: ol.View;
    componentType: string;
    constrainRotation: boolean | number;
    enableRotation: boolean;
    extent: ol.Extent;
    maxResolution: number;
    minResolution: number;
    maxZoom: number;
    minZoom: number;
    resolution: number;
    resolutions: number[];
    rotation: number;
    zoom: number;
    zoomFactor: number;
    center: ol.Coordinate;
    projection: string;
    constructor(mapSystem: any, host: MapComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
