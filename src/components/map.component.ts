import {
  Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit,
  SimpleChanges, OnChanges, Inject
} from '@angular/core';

import { MapSystemToken } from '../map-system';


@Component({
  selector: 'aol-map',
  template: `<div [style.width]="width" [style.height]="height"></div><ng-content></ng-content>`
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  public instance: ol.Map;
  public componentType: string = 'map';

  @Input() width: string = '100%';
  @Input() height: string = '100%';
  @Input() pixelRatio: number;
  @Input() keyboardEventTarget: Element|string;
  @Input() loadTilesWhileAnimating: boolean;
  @Input() loadTilesWhileInteracting: boolean;
  @Input() logo: string|boolean;
  @Input() renderer: 'canvas'|'webgl';


  @Output() onClick: EventEmitter<ol.MapBrowserEvent>;
  @Output() onDblClick: EventEmitter<ol.MapBrowserEvent>;
  @Output() onMoveEnd: EventEmitter<ol.MapEvent>;
  @Output() onPointerDrag: EventEmitter<ol.MapBrowserEvent>;
  @Output() onPointerMove: EventEmitter<ol.MapBrowserEvent>;
  @Output() onPostCompose: EventEmitter<ol.render.Event>;
  @Output() onPostRender: EventEmitter<ol.MapEvent>;
  @Output() onPreCompose: EventEmitter<ol.render.Event>;
  @Output() onPropertyChange: EventEmitter<ol.ObjectEvent>;
  @Output() onSingleClick: EventEmitter<ol.MapBrowserEvent>;

  // we pass empty arrays to not get default controls/interactions because we have our own directives
  controls: ol.control.Control[] = [];
  interactions: ol.interaction.Interaction[] = [];

  constructor(@Inject(MapSystemToken) private mapSystem: any,
              private host: ElementRef) {
    this.onClick = new EventEmitter<ol.MapBrowserEvent>();
    this.onDblClick = new EventEmitter<ol.MapBrowserEvent>();
    this.onMoveEnd = new EventEmitter<ol.MapEvent>();
    this.onPointerDrag = new EventEmitter<ol.MapBrowserEvent>();
    this.onPointerMove = new EventEmitter<ol.MapBrowserEvent>();
    this.onPostCompose = new EventEmitter<ol.render.Event>();
    this.onPostRender = new EventEmitter<ol.MapEvent>();
    this.onPreCompose = new EventEmitter<ol.render.Event>();
    this.onPropertyChange = new EventEmitter<ol.ObjectEvent>();
    this.onSingleClick = new EventEmitter<ol.MapBrowserEvent>();
  }

  ngOnInit() {
    // console.log('creating ol.Map instance with:', this);
    this.instance = new this.mapSystem.Map(this);
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.instance.on('click', (event: ol.MapBrowserEvent) => this.onClick.emit(event));
    this.instance.on('dblclick', (event: ol.MapBrowserEvent) => this.onDblClick.emit(event));
    this.instance.on('moveend', (event: ol.MapEvent) => this.onMoveEnd.emit(event));
    this.instance.on('pointerdrag', (event: ol.MapBrowserEvent) => this.onPointerDrag.emit(event));
    this.instance.on('pointermove', (event: ol.MapBrowserEvent) => this.onPointerMove.emit(event));
    this.instance.on('postcompose', (event: ol.render.Event) => this.onPostCompose.emit(event));
    this.instance.on('postrender', (event: ol.MapEvent) => this.onPostRender.emit(event));
    this.instance.on('precompose', (event: ol.render.Event) => this.onPreCompose.emit(event));
    this.instance.on('propertychange', (event: ol.ObjectEvent) => this.onPropertyChange.emit(event));
    this.instance.on('singleclick', (event: ol.MapBrowserEvent) => this.onSingleClick.emit(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    let properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (let key in changes) {
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
