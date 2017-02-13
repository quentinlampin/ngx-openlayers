/// <reference types="openlayers" />
import { format, geom } from 'openlayers';
import { FormatComponent } from './format.component';
export declare class FormatMVTComponent extends FormatComponent {
    instance: format.MVT;
    featureClass: (((geom: (geom.Geometry | {
        [k: string]: any;
    })) => any) | ((geom: geom.GeometryType, arg2: number[], arg3: (number[] | number[][]), arg4: {
        [k: string]: any;
    }) => any));
    geometryName: string;
    layerName: string;
    layers: string[];
    constructor();
}
