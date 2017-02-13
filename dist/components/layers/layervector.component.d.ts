/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
export declare class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy {
    source: source.Vector;
    renderBuffer: number;
    constructor(map: MapComponent);
    ngOnInit(): void;
}
