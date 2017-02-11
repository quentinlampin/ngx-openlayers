/// <reference types="openlayers" />
import { OnInit, OnDestroy } from '@angular/core';
import { geom } from 'openlayers';
import { FeatureComponent } from './feature.component';
export declare class GeometryLinestringComponent implements OnInit, OnDestroy {
    componentType: string;
    instance: geom.LineString;
    private host;
    constructor(feature: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class GeometryPointComponent implements OnInit, OnDestroy {
    componentType: string;
    instance: geom.Point;
    private host;
    constructor(feature: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class GeometryPolygonComponent implements OnInit, OnDestroy {
    componentType: string;
    instance: geom.Polygon;
    private host;
    constructor(feature: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
