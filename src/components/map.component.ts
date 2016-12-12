import { Component, ElementRef, Output, EventEmitter, Optional } from '@angular/core';
import { Map, MapBrowserEvent,MapEvent, render, ObjectEvent } from 'openlayers';
import { MapCommandService } from '../services/map-command.service';

@Component({
  selector: 'aol-map',
  template: `<div class='fill'></div><ng-content></ng-content>`,
  styles: ['.fill { height:100%; width: 100% }']
})
export class MapComponent extends Map {
  _host_: ElementRef;

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

  constructor(
    element: ElementRef,
    @Optional() private mapCommandService: MapCommandService){
    super({target: null, controls: []});
    this._host_ = element;
  }

  ngOnInit(){
  	this.setTarget(this._host_.nativeElement.firstElementChild);
  	this.updateSize();
    this.addEvents();
    if (this.mapCommandService) {
      this.mapCommandService.registerMap(this);
    }
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
