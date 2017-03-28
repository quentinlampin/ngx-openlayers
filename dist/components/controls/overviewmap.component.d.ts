/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { control, View, layer } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class ControlOverviewMapComponent implements OnInit, OnDestroy {
    private map;
    instance: control.OverviewMap;
    collapsed: boolean;
    collapseLabel: string;
    collapsible: boolean;
    label: string;
    layers: layer.Layer[];
    target: Element;
    tipLabel: string;
    view: View;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
