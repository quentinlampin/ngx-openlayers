/// <reference types="openlayers" />
import { OnInit, OnDestroy } from '@angular/core';
import { Feature } from 'openlayers';
import { SourceVectorComponent } from "./source.components";
export declare class FeatureComponent implements OnInit, OnDestroy {
    private host;
    componentType: string;
    instance: Feature;
    constructor(source: SourceVectorComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
