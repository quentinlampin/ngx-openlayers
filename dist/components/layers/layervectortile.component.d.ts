/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
export declare class LayerVectorTileComponent extends LayerComponent implements OnInit {
    protected mapSystem: any;
    renderBuffer: number;
    renderMode: ol.layer.VectorTileRenderType | string;
    renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number;
    style: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    visible: boolean;
    constructor(mapSystem: any, map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
}
