/// <reference types="openlayers" />
import { AfterViewInit, QueryList } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
export declare class AttributionsComponent implements AfterViewInit {
    private source;
    instance: Array<ol.Attribution>;
    attributions: QueryList<AttributionComponent>;
    constructor(source: SourceComponent);
    ngAfterViewInit(): void;
}
