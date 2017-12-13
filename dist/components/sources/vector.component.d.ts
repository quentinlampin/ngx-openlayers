/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { LayerVectorComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceVectorComponent extends SourceComponent implements OnInit {
    protected mapSystem: any;
    instance: ol.source.Vector;
    overlaps: boolean;
    useSpatialIndex: boolean;
    wrapX: boolean;
    url: string;
    format: ol.format.Feature;
    strategy: ol.LoadingStrategy;
    constructor(mapSystem: any, layer: LayerVectorComponent);
    ngOnInit(): void;
}
