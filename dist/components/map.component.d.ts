/// <reference types="openlayers" />
import { OnInit, ElementRef, EventEmitter, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { Map, MapBrowserEvent, MapEvent, render, ObjectEvent, control, interaction } from 'openlayers';
export declare class MapComponent implements OnInit, AfterViewInit, OnChanges {
    private host;
    instance: Map;
    componentType: string;
    width: string;
    height: string;
    pixelRatio: number;
    keyboardEventTarget: Element | string;
    loadTilesWhileAnimating: boolean;
    loadTilesWhileInteracting: boolean;
    logo: string | boolean;
    renderer: 'canvas' | 'webgl';
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
    controls: control.Control[];
    interactions: interaction.Interaction[];
    constructor(host: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
}
