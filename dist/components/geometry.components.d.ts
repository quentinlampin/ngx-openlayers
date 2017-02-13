/// <reference types="openlayers" />
import { OnInit, OnDestroy } from '@angular/core';
import { geom } from 'openlayers';
import { FeatureComponent } from './feature.component';
export declare class GeometryLinestringComponent implements OnInit, OnDestroy {
    private host;
    componentType: string;
    instance: geom.LineString;
    constructor(host: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class GeometryPointComponent implements OnInit, OnDestroy {
    private host;
    componentType: string;
    instance: geom.Point;
    constructor(host: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class GeometryPolygonComponent implements OnInit, OnDestroy {
    private host;
    componentType: string;
    instance: geom.Polygon;
    constructor(host: FeatureComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
