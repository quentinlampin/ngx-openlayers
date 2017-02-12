/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { layer, style, StyleFunction } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
export declare class LayerVectorTileComponent extends LayerComponent implements OnInit {
    renderBuffer: number;
    renderMode: layer.VectorTileRenderType | string;
    renderOrder: (feature1: ol.Feature, feature2: ol.Feature) => number;
    style: (style.Style | style.Style[] | StyleFunction);
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    visible: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
}
