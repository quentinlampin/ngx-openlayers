/// <reference types="openlayers" />
import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Extent } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
export declare abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
    protected host: LayerGroupComponent | MapComponent;
    instance: any;
    componentType: string;
    opacity: number;
    visible: boolean;
    extent: Extent;
    zIndex: number;
    minResolution: number;
    maxResolution: number;
    constructor(host: LayerGroupComponent | MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
