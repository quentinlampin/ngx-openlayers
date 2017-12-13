/// <reference types="openlayers" />
import { AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { StyleComponent } from './style.component';
export declare class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
    protected mapSystem: any;
    private host;
    componentType: string;
    instance: ol.style.Circle;
    fill: ol.style.Fill;
    radius: number;
    snapToPixel: boolean;
    stroke: ol.style.Stroke;
    atlasManager: ol.style.AtlasManager;
    constructor(mapSystem: any, host: StyleComponent);
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    update(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
