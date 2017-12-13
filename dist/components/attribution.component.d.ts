/// <reference types="openlayers" />
import { ElementRef, OnInit } from '@angular/core';
export declare class AttributionComponent implements OnInit {
    protected mapSystem: any;
    private elementRef;
    instance: ol.Attribution;
    html: string;
    constructor(mapSystem: any, elementRef: ElementRef);
    ngOnInit(): void;
}
