/// <reference types="openlayers" />
import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
export declare abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
    protected mapSystem: any;
    protected host: LayerGroupComponent | MapComponent;
    instance: any;
    componentType: string;
    opacity: number;
    visible: boolean;
    extent: ol.Extent;
    zIndex: number;
    minResolution: number;
    maxResolution: number;
    constructor(mapSystem: any, host: LayerGroupComponent | MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
