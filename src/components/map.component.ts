import { Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Map, MapBrowserEvent, MapEvent, render, ObjectEvent } from 'openlayers';

@Component({
  selector: 'aol-map',
  template: `<div [style.width]="width" [style.height]="height"></div><ng-content></ng-content>`
})

export class MapComponent implements OnInit, AfterViewInit {
  private host: ElementRef; /** element that hosts the map */
  public instance: Map;


  @Input('width') width: string = '100%';
  @Input('height') height: string = '100%';
  @Input('pixelRatio') pixelRatio: number|undefined = undefined;
  @Input('keyboardEventTarget') keyboardEventTarget: Element|string|undefined = undefined;
  @Input('loadTilesWhileAnimating') loadTilesWhileAnimating: boolean|undefined = undefined;
  @Input('loadTilesWhileInteracting') loadTilesWhileInteracting: boolean|undefined = undefined;
  @Input('logo') logo: string|boolean|undefined = undefined;
  @Input('renderer') renderer: 'canvas'|'webgl'|undefined = undefined;


  @Output() onClick: EventEmitter<MapBrowserEvent>;
  @Output() onDblClick: EventEmitter<MapBrowserEvent>;
  @Output() onMoveEnd: EventEmitter<MapEvent>;
  @Output() onPointerDrag: EventEmitter<MapBrowserEvent>;
  @Output() onPointerMove: EventEmitter<MapBrowserEvent>;
  @Output() onPostCompose: EventEmitter<render.Event>;
  @Output() onPostRender: EventEmitter<MapEvent>;
  @Output() onPreCompose: EventEmitter<render.Event>;
  @Output() onPropertyChange: EventEmitter<ObjectEvent>;
  @Output() onSingleClick: EventEmitter<MapBrowserEvent>;

  constructor(element: ElementRef) {
    console.log('instancing aol-map');
    this.host = element;
    this.instance = new Map(this);

    this.onClick = new EventEmitter<MapBrowserEvent>();
    this.onDblClick = new EventEmitter<MapBrowserEvent>();
    this.onMoveEnd = new EventEmitter<MapEvent>();
    this.onPointerDrag = new EventEmitter<MapBrowserEvent>();
    this.onPointerMove = new EventEmitter<MapBrowserEvent>();
    this.onPostCompose = new EventEmitter<render.Event>();
    this.onPostRender = new EventEmitter<MapEvent>();
    this.onPreCompose = new EventEmitter<render.Event>();
    this.onPropertyChange = new EventEmitter<ObjectEvent>();
    this.onSingleClick = new EventEmitter<MapBrowserEvent>();
  }

  ngOnInit() {
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.instance.on('click', (event: MapBrowserEvent) => this.onClick.emit(event));
    this.instance.on('dblclick', (event: MapBrowserEvent) => this.onDblClick.emit(event));
    this.instance.on('moveend', (event: MapEvent) => this.onMoveEnd.emit(event));
    this.instance.on('pointerdrag', (event: MapBrowserEvent) => this.onPointerDrag.emit(event));
    this.instance.on('pointermove', (event: MapBrowserEvent) => this.onPointerMove.emit(event));
    this.instance.on('postcompose', (event: render.Event) => this.onPostCompose.emit(event));
    this.instance.on('postrender',  (event: MapEvent) => this.onPostRender.emit(event));
    this.instance.on('precompose', (event: render.Event) => this.onPreCompose.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.onPropertyChange.emit(event));
    this.instance.on('singleclick', (event: MapBrowserEvent) => this.onSingleClick.emit(event));
  }

  ngAfterViewInit() {
    this.instance.updateSize();
  }
}
