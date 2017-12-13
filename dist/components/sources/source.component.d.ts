/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { LayerComponent } from '../layers';
import AttributionLike = ol.AttributionLike;
export declare class SourceComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    protected host: LayerComponent;
    instance: ol.source.Source;
    componentType: string;
    attributions: AttributionLike;
    constructor(mapSystem: any, host: LayerComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
