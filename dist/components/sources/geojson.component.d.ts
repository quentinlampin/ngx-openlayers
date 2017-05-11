/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { source, ProjectionLike, format } from 'openlayers';
import { LayerVectorComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceGeoJSONComponent extends SourceComponent implements OnInit {
    instance: source.Vector;
    format: format.Feature;
    defaultDataProjection: ProjectionLike;
    featureProjection: ProjectionLike;
    geometryName: string;
    url: string;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
}
