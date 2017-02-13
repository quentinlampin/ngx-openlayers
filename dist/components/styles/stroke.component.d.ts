/// <reference types="openlayers" />
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { style, Color } from 'openlayers';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
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
