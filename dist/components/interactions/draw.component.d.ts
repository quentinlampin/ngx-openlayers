/// <reference types="openlayers" />
import { OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
export declare class DrawInteractionComponent implements OnInit, OnDestroy {
    protected mapSystem: any;
    private map;
    instance: ol.interaction.Draw;
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
    onChange: EventEmitter<ol.interaction.Draw.Event>;
    onChangeActive: EventEmitter<ol.interaction.Draw.Event>;
    onDrawEnd: EventEmitter<ol.interaction.Draw.Event>;
    onDrawStart: EventEmitter<ol.interaction.Draw.Event>;
    onPropertyChange: EventEmitter<ol.interaction.Draw.Event>;
    constructor(mapSystem: any, map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
