/// <reference types="openlayers" />
import { OnInit, ElementRef, EventEmitter, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
export declare class MapComponent implements OnInit, AfterViewInit, OnChanges {
    private mapSystem;
    private host;
    instance: ol.Map;
    componentType: string;
    width: string;
    height: string;
    pixelRatio: number;
    keyboardEventTarget: Element | string;
    loadTilesWhileAnimating: boolean;
    loadTilesWhileInteracting: boolean;
    logo: string | boolean;
    renderer: 'canvas' | 'webgl';
    onClick: EventEmitter<ol.MapBrowserEvent>;
    onDblClick: EventEmitter<ol.MapBrowserEvent>;
    onMoveEnd: EventEmitter<ol.MapEvent>;
    onPointerDrag: EventEmitter<ol.MapBrowserEvent>;
    onPointerMove: EventEmitter<ol.MapBrowserEvent>;
    onPostCompose: EventEmitter<ol.render.Event>;
    onPostRender: EventEmitter<ol.MapEvent>;
    onPreCompose: EventEmitter<ol.render.Event>;
    onPropertyChange: EventEmitter<ol.ObjectEvent>;
    onSingleClick: EventEmitter<ol.MapBrowserEvent>;
    controls: ol.control.Control[];
    interactions: ol.interaction.Interaction[];
    constructor(mapSystem: any, host: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
}
