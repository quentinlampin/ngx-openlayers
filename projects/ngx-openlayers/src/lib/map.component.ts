import { AfterViewInit, Component, ElementRef, OnInit, effect, inject, input, output } from '@angular/core';
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
export class MapComponent implements OnInit, AfterViewInit {
  private host = inject(ElementRef);

  width = input('100%');
  height = input('100%');
  pixelRatio = input<number>();
  keyboardEventTarget = input<HTMLElement | string>();
  logo = input<string | boolean>();
  renderer = input<'canvas' | 'webgl'>();

  olClick = output<MapBrowserEvent>();
  dblClick = output<MapBrowserEvent>();
  moveStart = output<MapEvent>();
  moveEnd = output<MapEvent>();
  pointerDrag = output<MapBrowserEvent>();
  pointerMove = output<MapBrowserEvent>();
  onpostrender = output<RenderEvent>();
  postRender = output<MapEvent>();
  onpreCompose = output<RenderEvent>();
  propertyChange = output<BaseEvent>();
  singleClick = output<MapBrowserEvent>();

  instance?: Map;
  componentType = 'map';
  // we pass empty arrays to not get default controls/interactions because we have our own directives
  controls: Control[] = [];
  interactions: Interaction[] = [];

  private initialized = false;

  constructor() {
    // Non-recreating property updates, mirroring the original ngOnChanges'
    // blind setProperties push (it iterates changed keys and forwards them
    // as-is, so pushing the full current set on every dependency change is
    // equivalent here).
    effect(() => {
      const properties: Parameters<BaseObject['setProperties']>[0] = {
        pixelRatio: this.pixelRatio(),
        keyboardEventTarget: this.keyboardEventTarget(),
        logo: this.logo(),
        renderer: this.renderer(),
      };

      if (!this.initialized || !this.instance) {
        return;
      }

      this.instance.setProperties(properties, false);
    });
  }

  ngOnInit(): void {
    this.instance = new Map({
      pixelRatio: this.pixelRatio(),
      keyboardEventTarget: this.keyboardEventTarget(),
      controls: this.controls,
      interactions: this.interactions,
    });

    this.instance.setTarget(this.host.nativeElement.firstElementChild);

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

    this.initialized = true;
  }

  ngAfterViewInit(): void {
    this.instance?.updateSize();
    if (this.instance) {
      this.instance.updateSize();
    }
  }
}
