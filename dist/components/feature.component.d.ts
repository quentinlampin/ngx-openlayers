/// <reference types="openlayers" />
import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Feature } from 'openlayers';
import { SourceVectorComponent } from './sources';
export declare class FeatureComponent implements OnInit, OnDestroy, OnChanges {
    private host;
    componentType: string;
    instance: Feature;
    id: string | number | undefined;
    constructor(host: SourceVectorComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
