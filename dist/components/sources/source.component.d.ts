/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { source } from 'openlayers';
import { LayerComponent } from '../layers';
import AttributionLike = ol.AttributionLike;
export declare class SourceComponent implements OnInit, OnDestroy {
    protected host: LayerComponent;
    instance: source.Source;
    componentType: string;
    attributions: AttributionLike;
    constructor(host: LayerComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
