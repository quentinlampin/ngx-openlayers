import { OnChanges, SimpleChanges } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryPointComponent, GeometryLinestringComponent, GeometryPolygonComponent } from './geometry.components';
import { ViewComponent } from './view.component';
import { OverlayComponent } from './overlay.component';
export declare class CoordinateComponent implements OnChanges {
    private map;
    private host;
    x: number;
    y: number;
    srid: string;
    constructor(map: MapComponent, viewHost: ViewComponent, geometryPointHost: GeometryPointComponent, overlayHost: OverlayComponent);
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class CollectionCoordinatesComponent implements OnChanges {
    private map;
    private host;
    coordinates: [number, number][];
    srid: string;
    constructor(map: MapComponent, geometryLinestring: GeometryLinestringComponent, geometryPolygon: GeometryPolygonComponent);
    ngOnChanges(changes: SimpleChanges): void;
}
