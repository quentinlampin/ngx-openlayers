import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Map, MapBrowserEvent, MapEvent, render, ObjectEvent } from 'openlayers';

@Component({
  selector: 'aol-map',
  template: `<div [style.width]="width" [style.height]="height"></div><ng-content></ng-content>`
})

export class MapComponent implements OnInit {
  private _host_: ElementRef;

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
    this._host_ = element;

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
    this.instance.setTarget(this._host_.nativeElement.firstElementChild);
    this.addEvents();
    this.refresh();
  }

  private refresh() {
    setTimeout( () => { this.instance.updateSize(); }, 0);
  }

  private addEvents() {
    this.instance.on('click', function(event: MapBrowserEvent) {
      this.onClick.emit(event);
    }.bind(this));
    this.instance.on('dblclick', function(event: MapBrowserEvent) {
      this.onDblClick.emit(event);
    }.bind(this));
    this.instance.on('moveend', function(event: MapEvent) {
      this.onMoveEnd.emit(event);
    }.bind(this));
    this.instance.on('pointerdrag', function(event: MapBrowserEvent) {
      this.onPointerDrag.emit(event);
    }.bind(this));
    this.instance.on('pointermove', function(event: MapBrowserEvent) {
      this.onPointerMove.emit(event);
    }.bind(this));
    this.instance.on('postcompose', function(event: render.Event) {
      this.onPostCompose.emit(event);
    }.bind(this));
    this.instance.on('postrender', function(event: MapEvent) {
      this.onPostRender.emit(event);
    }.bind(this));
    this.instance.on('precompose', function(event: render.Event) {
      this.onPreCompose.emit(event);
    }.bind(this));
    this.instance.on('propertychange', function(event: ObjectEvent) {
      this.onPropertyChange.emit(event);
    }.bind(this));
    this.instance.on('singleclick', function(event: MapBrowserEvent) {
      this.onSingleClick.emit(event);
    }.bind(this));
  }
}
