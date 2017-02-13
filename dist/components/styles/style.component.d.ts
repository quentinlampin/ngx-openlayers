/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { style, StyleGeometryFunction, geom } from 'openlayers';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers';
export declare class StyleComponent implements OnInit {
    private host;
    instance: style.Style;
    componentType: string;
    geometry: string | geom.Geometry | StyleGeometryFunction;
    fill: style.Fill;
    image: style.Image;
    stroke: style.Stroke;
    text: style.Text;
    zIndex: number;
    constructor(featureHost: FeatureComponent, layerHost: LayerVectorComponent);
    update(): void;
    ngOnInit(): void;
}
