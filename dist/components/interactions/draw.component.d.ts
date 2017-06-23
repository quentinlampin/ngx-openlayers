/// <reference types="openlayers" />
import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { interaction } from 'openlayers';
import { MapComponent } from '../map.component';
export declare class DrawInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: interaction.Draw;
    clickTolerance?: number;
    features?: ol.Collection<ol.Feature>;
    source?: ol.source.Vector;
    snapTolerance?: number;
    type: ol.geom.GeometryType;
    maxPoints?: number;
    minPoints?: number;
    finishCondition?: ol.EventsConditionType;
    style?: (ol.style.Style | ol.style.Style[] | ol.StyleFunction);
    geometryFunction?: ol.DrawGeometryFunctionType;
    geometryName?: string;
    condition?: ol.EventsConditionType;
    freehandCondition?: ol.EventsConditionType;
    freehand?: boolean;
    wrapX?: boolean;
    onChange: EventEmitter<interaction.Draw.Event>;
    onChangeActive: EventEmitter<interaction.Draw.Event>;
    onDrawEnd: EventEmitter<interaction.Draw.Event>;
    onDrawStart: EventEmitter<interaction.Draw.Event>;
    onPropertyChange: EventEmitter<interaction.Draw.Event>;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
