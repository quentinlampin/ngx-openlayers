/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { LayerVectorComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceGeoJSONComponent extends SourceComponent implements OnInit {
    protected mapSystem: any;
    instance: ol.source.Vector;
    format: ol.format.Feature;
    defaultDataProjection: ol.ProjectionLike;
    featureProjection: ol.ProjectionLike;
    geometryName: string;
    url: string;
    constructor(mapSystem: any, layer: LayerVectorComponent);
    ngOnInit(): void;
}
