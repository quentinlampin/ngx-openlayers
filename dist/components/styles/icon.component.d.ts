/// <reference types="openlayers" />
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StyleComponent } from './style.component';
export declare class StyleIconComponent implements OnInit, OnChanges {
    protected mapSystem: any;
    private host;
    instance: ol.style.Icon;
    anchor: [number, number];
    anchorXUnits: ol.style.IconAnchorUnits;
    anchorYUnits: ol.style.IconAnchorUnits;
    anchorOrigin: ol.style.IconOrigin;
    color: [number, number, number, number];
    crossOrigin: ol.style.IconOrigin;
    img: string;
    offset: [number, number];
    offsetOrigin: ol.style.IconOrigin;
    opacity: number;
    scale: number;
    snapToPixel: boolean;
    rotateWithView: boolean;
    rotation: number;
    size: [number, number];
    imgSize: [number, number];
    src: string;
    constructor(mapSystem: any, host: StyleComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
