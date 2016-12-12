import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { Map, MapBrowserEvent,MapEvent, render, ObjectEvent } from 'openlayers';

@Component({
  selector: 'aol-map',
  template: `<div class='fill'></div><ng-content></ng-content>`,
  styles: ['.fill { height:100%; width: 100% }']
})
export class MapComponent{
  private _host_: ElementRef;

  public instance: Map;
  public options: any;

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
    this.options = {
      target: null,
      controls: []
    };
    this.instance = new Map(this.options);
    this._host_ = element;
  }

  ngOnInit(){
  	this.instance.setTarget(this._host_.nativeElement.firstElementChild);
  	this.instance.updateSize();
    this.addEvents();
  }

  private addEvents() {
    this.instance.on('click', function(event: MapBrowserEvent) {
      this.onClick.emit(event);
    });
    this.instance.on('dblclick', function(event: MapBrowserEvent) {
      this.onDblClick.emit(event);
    });
    this.instance.on('moveend', function(event: MapEvent) {
      this.onMoveEnd.emit(event);
    });
    this.instance.on('pointerdrag', function(event: MapBrowserEvent) {
      this.onPointerDrag.emit(event);
    });
    this.instance.on('pointermove', function(event: MapBrowserEvent) {
      this.onPointerMove.emit(event);
    });
    this.instance.on('postcompose', function(event: render.Event) {
      this.onPostCompose.emit(event);
    });
    this.instance.on('postrender', function(event: MapEvent) {
      this.onPostRender.emit(event);
    });
    this.instance.on('precompose', function(event: render.Event) {
      this.onPreCompose.emit(event);
    });
    this.instance.on('propertychange', function(event: ObjectEvent) {
      this.onPropertyChange.emit(event);
    });
    this.instance.on('singleclick', function(event: MapBrowserEvent) {
      this.onSingleClick.emit(event);
    });
  }
}
