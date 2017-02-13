/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { AttributionLike } from 'openlayers';
import { LayerVectorComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceVectorComponent extends SourceComponent implements OnInit {
    attributions: AttributionLike;
    overlaps: boolean;
    useSpatialIndex: boolean;
    wrapX: boolean;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
}
