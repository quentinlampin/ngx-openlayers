/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class ControlOverviewMapComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.control.OverviewMap;
    collapsed: boolean;
    collapseLabel: string;
    collapsible: boolean;
    label: string;
    layers: ol.layer.Layer[];
    target: Element;
    tipLabel: string;
    view: ol.View;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
