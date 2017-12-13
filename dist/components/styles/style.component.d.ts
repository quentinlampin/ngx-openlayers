/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers';
export declare class StyleComponent implements OnInit {
    protected mapSystem: any;
    private host;
    instance: ol.style.Style;
    componentType: string;
    geometry: string | ol.geom.Geometry | ol.StyleGeometryFunction;
    fill: ol.style.Fill;
    image: ol.style.Image;
    stroke: ol.style.Stroke;
    text: ol.style.Text;
    zIndex: number;
    constructor(mapSystem: any, featureHost: FeatureComponent, layerHost: LayerVectorComponent);
    update(): void;
    ngOnInit(): void;
}
