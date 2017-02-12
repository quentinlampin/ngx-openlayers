/// <reference types="openlayers" />
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { style } from 'openlayers';
import { StyleComponent } from './style.component';
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
