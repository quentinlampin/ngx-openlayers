/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { source } from 'openlayers';
import { LayerVectorComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceVectorComponent extends SourceComponent implements OnInit {
    instance: source.Vector;
    overlaps: boolean;
    useSpatialIndex: boolean;
    wrapX: boolean;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
}
