import { OnDestroy, OnChanges } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryPointComponent, GeometryLinestringComponent, GeometryPolygonComponent } from './geometry.components';
import { ViewComponent } from './view.component';
export declare class CoordinateComponent implements OnChanges, OnDestroy {
    private host;
    private map;
    x: number;
    y: number;
    srid: string;
    constructor(map: MapComponent, viewHost: ViewComponent, geometryPointHost: GeometryPointComponent);
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
export declare class CollectionCoordinatesComponent implements OnChanges, OnDestroy {
    private host;
    private map;
    coordinates: [number, number][];
    srid: string;
    constructor(map: MapComponent, geometryLinestring: GeometryLinestringComponent, geometryPolygon: GeometryPolygonComponent);
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
