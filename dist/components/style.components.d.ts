/// <reference types="openlayers" />
import { OnInit, AfterContentInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { style, Color, ColorLike, StyleGeometryFunction, geom } from 'openlayers';
import { FeatureComponent } from './feature.component';
import { LayerVectorComponent } from './layers';
export declare class StyleComponent implements OnInit {
    private host;
    instance: style.Style;
    componentType: string;
    geometry: string | geom.Geometry | StyleGeometryFunction;
    fill: style.Fill;
    image: style.Image;
    stroke: style.Stroke;
    text: style.Text;
    zIndex: number;
    constructor(featureHost: FeatureComponent, layerHost: LayerVectorComponent);
    update(): void;
    ngOnInit(): void;
}
export declare class StyleCircleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private host;
    componentType: string;
    instance: style.Circle;
    fill: style.Fill;
    radius: number;
    snapToPixel: boolean;
    stroke: style.Stroke;
    atlasManager: style.AtlasManager;
    constructor(host: StyleComponent);
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    update(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
export declare class StyleFillComponent implements OnInit, OnChanges {
    private host;
    instance: style.Fill;
    color: Color | ColorLike;
    constructor(styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class StyleIconComponent implements OnInit, OnChanges {
    private host;
    instance: style.Icon;
    anchor: [number, number];
    anchorXUnits: style.IconAnchorUnits;
    anchorYUnits: style.IconAnchorUnits;
    anchorOrigin: style.IconOrigin;
    color: [number, number, number, number];
    crossOrigin: style.IconOrigin;
    img: string;
    offset: [number, number];
    offsetOrigin: style.IconOrigin;
    opacity: number;
    scale: number;
    snapToPixel: boolean;
    rotateWithView: boolean;
    rotation: number;
    size: [number, number];
    imgSize: [number, number];
    src: string;
    constructor(host: StyleComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class StyleStrokeComponent implements OnInit, OnChanges {
    instance: style.Stroke;
    private host;
    color: Color | undefined;
    lineCap: string | undefined;
    lineDash: number[] | undefined;
    lineJoin: string | undefined;
    miterLimit: number | undefined;
    width: number | undefined;
    constructor(styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
export declare class StyleTextComponent implements OnInit, OnChanges {
    private host;
    instance: style.Text;
    componentType: string;
    font: string | undefined;
    offsetX: number | undefined;
    offsetY: number | undefined;
    scale: number | undefined;
    rotateWithView: boolean | undefined;
    rotation: number | undefined;
    text: string | undefined;
    textAlign: string | undefined;
    textBaseLine: string | undefined;
    constructor(host: StyleComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
