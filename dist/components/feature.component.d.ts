/// <reference types="openlayers" />
import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { SourceVectorComponent } from './sources';
export declare class FeatureComponent implements OnInit, OnDestroy, OnChanges {
    protected mapSystem: any;
    private host;
    componentType: string;
    instance: ol.Feature;
    id: string | number | undefined;
    constructor(mapSystem: any, host: SourceVectorComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
