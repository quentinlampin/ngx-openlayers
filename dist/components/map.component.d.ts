/// <reference types="openlayers" />
import { OnInit, ElementRef, EventEmitter, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { Map, MapBrowserEvent, MapEvent, render, ObjectEvent } from 'openlayers';
export declare class MapComponent implements OnInit, AfterViewInit, OnChanges {
    private host;
    instance: Map;
    componentType: string;
    width: string;
    height: string;
    pixelRatio: number | undefined;
    keyboardEventTarget: Element | string | undefined;
    loadTilesWhileAnimating: boolean | undefined;
    loadTilesWhileInteracting: boolean | undefined;
    logo: string | boolean | undefined;
    renderer: 'canvas' | 'webgl' | undefined;
    onClick: EventEmitter<MapBrowserEvent>;
    onDblClick: EventEmitter<MapBrowserEvent>;
    onMoveEnd: EventEmitter<MapEvent>;
    onPointerDrag: EventEmitter<MapBrowserEvent>;
    onPointerMove: EventEmitter<MapBrowserEvent>;
    onPostCompose: EventEmitter<render.Event>;
    onPostRender: EventEmitter<MapEvent>;
    onPreCompose: EventEmitter<render.Event>;
    onPropertyChange: EventEmitter<ObjectEvent>;
    onSingleClick: EventEmitter<MapBrowserEvent>;
    constructor(host: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
}
