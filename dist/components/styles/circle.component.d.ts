/// <reference types="openlayers" />
import { AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { style } from 'openlayers';
import { StyleComponent } from './style.component';
export declare class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private host;
    componentType: string;
    instance: style.Circle;
    fill: style.Fill;
    radius: number;
    snapToPixel: boolean;
    stroke: style.Stroke;
    atlasManager: style.AtlasManager;
    constructor(host: StyleComponent);
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
