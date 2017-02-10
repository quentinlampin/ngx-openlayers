/// <reference types="openlayers" />
import { OnDestroy, OnInit } from '@angular/core';
import { AttributionLike } from 'openlayers';
import { LayerTileComponent, LayerVectorComponent, LayerComponent } from "./layer.components";
export declare class SourceComponent implements OnInit, OnDestroy {
    host: LayerComponent;
    instance: any;
    componentType: string;
    constructor(layer: LayerComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
export declare class SourceOsmComponent extends SourceComponent {
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
export declare class SourceBingmapsComponent extends SourceComponent {
    key: string;
    imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey';
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
export declare class SourceVectorComponent extends SourceComponent {
    attributions: AttributionLike | undefined;
    overlaps: boolean | undefined;
    useSpatialIndex: boolean | undefined;
    wrapX: boolean | undefined;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
}
