import { OnChanges } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryPointComponent, GeometryLinestringComponent, GeometryPolygonComponent } from './geometry.components';
import { ViewComponent } from './view.component';
export declare class CoordinateComponent implements OnChanges {
    private map;
    private host;
    x: number;
    y: number;
    srid: string;
    constructor(map: MapComponent, viewHost: ViewComponent, geometryPointHost: GeometryPointComponent);
    ngOnChanges(): void;
}
export declare class CollectionCoordinatesComponent implements OnChanges {
    private map;
    private host;
    coordinates: [number, number][];
    srid: string;
    constructor(map: MapComponent, geometryLinestring: GeometryLinestringComponent, geometryPolygon: GeometryPolygonComponent);
    ngOnChanges(): void;
}
