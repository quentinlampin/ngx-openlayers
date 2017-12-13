/// <reference types="openlayers" />
import { OnInit, OnDestroy } from '@angular/core';
import { FeatureComponent } from './feature.component';
export declare class GeometryLinestringComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private host;
    componentType: string;
    instance: ol.geom.LineString;
    constructor(mapSystem: any, host: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class GeometryPointComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private host;
    componentType: string;
    instance: ol.geom.Point;
    constructor(mapSystem: any, host: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class GeometryPolygonComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private host;
    componentType: string;
    instance: ol.geom.Polygon;
    constructor(mapSystem: any, host: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
