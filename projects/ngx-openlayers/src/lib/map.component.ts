import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject, input,
} from '@angular/core';
import Map from 'ol/Map';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import MapEvent from 'ol/MapEvent';
import { Control } from 'ol/control';
import BaseEvent from 'ol/events/Event';
import { Interaction } from 'ol/interaction';
import RenderEvent from 'ol/render/Event';
import BaseObject from 'ol/Object';

@Component({
  selector: 'aol-map',
  template: `
    <div [style.width]="width()" [style.height]="height()"></div>
    <ng-content></ng-content>
  `,
  standalone: true,
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  private host = inject(ElementRef);

  width = input('100%');
  height = input('100%');
  pixelRatio = input<number>();
  keyboardEventTarget = input<HTMLElement | string>();

  @Output()
  olClick: EventEmitter<MapBrowserEvent>;
  @Output()
  dblClick: EventEmitter<MapBrowserEvent>;
  @Output()
  moveStart: EventEmitter<MapEvent>;
  @Output()
  moveEnd: EventEmitter<MapEvent>;
  @Output()
  pointerDrag: EventEmitter<MapBrowserEvent>;
  @Output()
  pointerMove: EventEmitter<MapBrowserEvent>;
  @Output()
  onpostrender: EventEmitter<RenderEvent>;
  @Output()
  postRender: EventEmitter<MapEvent>;
  @Output()
  onpreCompose: EventEmitter<RenderEvent>;
  @Output()
  propertyChange: EventEmitter<BaseEvent>;
  @Output()
  singleClick: EventEmitter<MapBrowserEvent>;

  instance = new Map({
    pixelRatio: this.pixelRatio(),
    keyboardEventTarget: this.keyboardEventTarget(),
    // we pass empty arrays to not get default controls/interactions because we have our own directives
    controls: [],
    interactions: [],
  });
  componentType = 'map';

  constructor() {
    this.olClick = new EventEmitter<MapBrowserEvent>();
    this.dblClick = new EventEmitter<MapBrowserEvent>();
    this.moveStart = new EventEmitter<MapEvent>();
    this.moveEnd = new EventEmitter<MapEvent>();
    this.pointerDrag = new EventEmitter<MapBrowserEvent>();
    this.pointerMove = new EventEmitter<MapBrowserEvent>();
    this.onpostrender = new EventEmitter<RenderEvent>();
    this.postRender = new EventEmitter<MapEvent>();
    this.onpreCompose = new EventEmitter<RenderEvent>();
    this.propertyChange = new EventEmitter<BaseEvent>();
    this.singleClick = new EventEmitter<MapBrowserEvent>();
  }

  ngOnInit(): void {
    this.instance.on('click', (event: MapBrowserEvent) => this.olClick.emit(event));
    this.instance.on('dblclick', (event: MapBrowserEvent) => this.dblClick.emit(event));
    this.instance.on('movestart', (event: MapEvent) => this.moveStart.emit(event));
    this.instance.on('moveend', (event: MapEvent) => this.moveEnd.emit(event));
    this.instance.on('pointerdrag', (event: MapBrowserEvent) => this.pointerDrag.emit(event));
    this.instance.on('pointermove', (event: MapBrowserEvent) => this.pointerMove.emit(event));
    this.instance.on('postrender', (event: RenderEvent) => this.onpostrender.emit(event));
    this.instance.on('postrender', (event: MapEvent) => this.postRender.emit(event));
    this.instance.on('precompose', (event: RenderEvent) => this.onpreCompose.emit(event));
    this.instance.on('propertychange', (event: BaseEvent) => this.propertyChange.emit(event));
    this.instance.on('singleclick', (event: MapBrowserEvent) => this.singleClick.emit(event));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const properties: Parameters<BaseObject['setProperties']>[0] = {};
    for (const key in changes) {
      properties[key] = changes[key].currentValue;
    }
    // console.log('changes detected in aol-map, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngAfterViewInit(): void {
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
  }
}
