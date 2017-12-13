/// <reference types="openlayers" />
import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
export declare class StyleFillComponent implements OnInit, OnChanges {
    protected mapSystem: any;
    private host;
    instance: ol.style.Fill;
    color: ol.Color | ol.ColorLike;
    constructor(mapSystem: any, styleHost: StyleComponent, styleCircleHost: StyleCircleComponent, styleTextHost: StyleTextComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
