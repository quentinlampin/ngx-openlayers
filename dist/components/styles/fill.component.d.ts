/// <reference types="openlayers" />
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { style, Color, ColorLike } from 'openlayers';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
export declare class StyleFillComponent implements OnInit, OnChanges {
    private host;
    instance: style.Fill;
    color: Color | ColorLike;
    constructor(styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
