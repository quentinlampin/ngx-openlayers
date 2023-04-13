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
} from '@angular/core';
import Map from 'ol/Map';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import MapEvent from 'ol/MapEvent';
import { Control } from 'ol/control';
import BaseEvent from 'ol/events/Event';
import { Interaction } from 'ol/interaction';
import RenderEvent from 'ol/render/Event';

@Component({
  selector: 'aol-map',
  template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `,
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  @Input()
  width = '100%';
  @Input()
  height = '100%';
  @Input()
  pixelRatio: number;
  @Input()
  keyboardEventTarget: HTMLElement | string;
  @Input()
  loadTilesWhileAnimating: boolean;
  @Input()
  loadTilesWhileInteracting: boolean;
  @Input()
  logo: string | boolean;
  @Input()
  renderer: 'canvas' | 'webgl';

  @Output()
  olClick: EventEmitter<MapBrowserEvent<UIEvent>>;
  @Output()
  dblClick: EventEmitter<MapBrowserEvent<UIEvent>>;
  @Output()
  moveStart: EventEmitter<MapEvent>;
  @Output()
  moveEnd: EventEmitter<MapEvent>;
  @Output()
  pointerDrag: EventEmitter<MapBrowserEvent<UIEvent>>;
  @Output()
  pointerMove: EventEmitter<MapBrowserEvent<UIEvent>>;
  @Output()
  onpostrender: EventEmitter<RenderEvent>;
  @Output()
  postRender: EventEmitter<MapEvent>;
  @Output()
  onpreCompose: EventEmitter<RenderEvent>;
  @Output()
  propertyChange: EventEmitter<BaseEvent>;
  @Output()
  singleClick: EventEmitter<MapBrowserEvent<UIEvent>>;

  instance: Map;
  componentType = 'map';
  // we pass empty arrays to not get default controls/interactions because we have our own directives
  controls: Control[] = [];
  interactions: Interaction[] = [];

  constructor(private host: ElementRef) {
    this.olClick = new EventEmitter<MapBrowserEvent<UIEvent>>();
    this.dblClick = new EventEmitter<MapBrowserEvent<UIEvent>>();
    this.moveStart = new EventEmitter<MapEvent>();
    this.moveEnd = new EventEmitter<MapEvent>();
    this.pointerDrag = new EventEmitter<MapBrowserEvent<UIEvent>>();
    this.pointerMove = new EventEmitter<MapBrowserEvent<UIEvent>>();
    this.onpostrender = new EventEmitter<RenderEvent>();
    this.postRender = new EventEmitter<MapEvent>();
    this.onpreCompose = new EventEmitter<RenderEvent>();
    this.propertyChange = new EventEmitter<BaseEvent>();
    this.singleClick = new EventEmitter<MapBrowserEvent<UIEvent>>();
  }

  ngOnInit() {
    // console.log('creating ol.Map instance with:', this);
    this.instance = new Map(this);
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.instance.on('click', (event: MapBrowserEvent<UIEvent>) => this.olClick.emit(event));
    this.instance.on('dblclick', (event: MapBrowserEvent<UIEvent>) => this.dblClick.emit(event));
    this.instance.on('movestart', (event: MapEvent) => this.moveStart.emit(event));
    this.instance.on('moveend', (event: MapEvent) => this.moveEnd.emit(event));
    this.instance.on('pointerdrag', (event: MapBrowserEvent<UIEvent>) => this.pointerDrag.emit(event));
    this.instance.on('pointermove', (event: MapBrowserEvent<UIEvent>) => this.pointerMove.emit(event));
    this.instance.on('postrender', (event: RenderEvent) => this.onpostrender.emit(event));
    this.instance.on('postrender', (event: MapEvent) => this.postRender.emit(event));
    this.instance.on('precompose', (event: RenderEvent) => this.onpreCompose.emit(event));
    this.instance.on('propertychange', (event: BaseEvent) => this.propertyChange.emit(event));
    this.instance.on('singleclick', (event: MapBrowserEvent<UIEvent>) => this.singleClick.emit(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-map, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngAfterViewInit() {
    this.instance.updateSize();
  }
}
