/// <reference types="openlayers" />
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StyleComponent } from './style.component';
export declare class StyleTextComponent implements OnInit, OnChanges {
    protected mapSystem: any;
    private host;
    instance: ol.style.Text;
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
    constructor(mapSystem: any, host: StyleComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
