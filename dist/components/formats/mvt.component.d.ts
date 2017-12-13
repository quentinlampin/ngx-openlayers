/// <reference types="openlayers" />
import { FormatComponent } from './format.component';
export declare class FormatMVTComponent extends FormatComponent {
    protected mapSystem: any;
    instance: ol.format.MVT;
    featureClass: (((geom: (ol.geom.Geometry | {
        [k: string]: any;
    })) => any) | ((geom: ol.geom.GeometryType, arg2: number[], arg3: (number[] | number[][]), arg4: {
        [k: string]: any;
    }) => any));
    geometryName: string;
    layerName: string;
    layers: string[];
    constructor(mapSystem: any);
}
