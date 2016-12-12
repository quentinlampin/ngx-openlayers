import { Component, OnInit, OnChanges, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Map, MapBrowserEvent,MapEvent, render, ObjectEvent } from 'openlayers';

@Component({
  selector: 'aol-map',
  template: `<div [style.width]="width" [style.height]="height"></div><ng-content></ng-content>`
})
export class MapComponent extends Map implements OnInit, OnChanges {
  _host_: ElementRef;

  @Input('width') width: string = "100%";
  @Input('height') height: string = "100%";

  @Output() onClick = new EventEmitter<MapBrowserEvent>();
  @Output() onDblClick = new EventEmitter<MapBrowserEvent>();
  @Output() onMoveEnd = new EventEmitter<MapEvent>();
  @Output() onPointerDrag = new EventEmitter<MapBrowserEvent>();
  @Output() onPointerMove = new EventEmitter<MapBrowserEvent>();
  @Output() onPostCompose = new EventEmitter<render.Event>();
  @Output() onPostRender = new EventEmitter<MapEvent>();
  @Output() onPreCompose = new EventEmitter<render.Event>();
  @Output() onPropertyChange = new EventEmitter<ObjectEvent>();
  @Output() onSingleClick = new EventEmitter<MapBrowserEvent>();

  constructor(element: ElementRef){
    super({target: null, controls: []});
    this._host_ = element;
  }

  ngOnInit(){
  	this.setTarget(this._host_.nativeElement.firstElementChild);
  	this.refresh();
    this.addEvents();
  }

  ngOnChanges(){
    this.refresh();
  }

  private refresh() {
  setTimeout(()=>{this.updateSize();}, 0);
  }

  private addEvents() {
    this.on('click', function(event: MapBrowserEvent) {
      this.onClick.emit(event);
    });
    this.on('dblclick', function(event: MapBrowserEvent) {
      this.onDblClick.emit(event);
    });
    this.on('moveend', function(event: MapEvent) {
      this.onMoveEnd.emit(event);
    });
    this.on('pointerdrag', function(event: MapBrowserEvent) {
      this.onPointerDrag.emit(event);
    });
    this.on('pointermove', function(event: MapBrowserEvent) {
      this.onPointerMove.emit(event);
    });
    this.on('postcompose', function(event: render.Event) {
      this.onPostCompose.emit(event);
    });
    this.on('postrender', function(event: MapEvent) {
      this.onPostRender.emit(event);
    });
    this.on('precompose', function(event: render.Event) {
      this.onPreCompose.emit(event);
    });
    this.on('propertychange', function(event: ObjectEvent) {
      this.onPropertyChange.emit(event);
    });
    this.on('singleclick', function(event: MapBrowserEvent) {
      this.onSingleClick.emit(event);
    });
  }
}
