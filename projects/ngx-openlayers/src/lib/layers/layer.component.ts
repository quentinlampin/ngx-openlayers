import { Directive, effect, inject, input, OnDestroy, OnInit } from '@angular/core';
import { Extent } from 'ol/extent';
import RenderEvent from 'ol/render/Event';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
import Map from 'ol/Map';

@Directive()
export abstract class LayerComponent implements OnInit, OnDestroy {
  className = input<string>();
  opacity = input<number>();
  visible = input<boolean>();
  extent = input<Extent>();
  zIndex = input<number>();
  minResolution = input<number>();
  maxResolution = input<number>();
  minZoom = input<number>();
  maxZoom = input<number>();
  map = input<Map>();
  properties = input<{ [x: string]: unknown }>();
  prerender = input<(evt: RenderEvent) => void>();
  postrender = input<(evt: RenderEvent) => void>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instance?: any;

  componentType = 'layer';

  private readonly mapComponent = inject(MapComponent);
  private readonly group = inject(LayerGroupComponent, { optional: true });

  protected host = this.group || this.mapComponent;

  constructor() {
    effect(() => {
      const values: Record<string, unknown> = {
        className: this.className(),
        opacity: this.opacity(),
        visible: this.visible(),
        extent: this.extent(),
        zIndex: this.zIndex(),
        minResolution: this.minResolution(),
        maxResolution: this.maxResolution(),
        minZoom: this.minZoom(),
        maxZoom: this.maxZoom(),
        map: this.map(),
        properties: this.properties(),
      };

      if (!this.instance) {
        return;
      }

      const definedValues = Object.fromEntries(Object.entries(values).filter(([, v]) => v !== undefined));

      if (Object.keys(definedValues).length) {
        this.instance.setProperties(definedValues, false);
      }
    });

    effect((onCleanup) => {
      const fn = this.prerender();
      if (this.instance && fn) {
        this.instance.on('prerender', fn);
        onCleanup(() => this.instance.un('prerender', fn));
      }
    });

    effect((onCleanup) => {
      const fn = this.postrender();
      if (this.instance && fn) {
        this.instance.on('postrender', fn);
        onCleanup(() => this.instance.un('postrender', fn));
      }
    });
  }

  ngOnInit(): void {
    this.host.instance?.getLayers().push(this.instance);
  }

  ngOnDestroy(): void {
    this.host.instance?.getLayers().remove(this.instance);
  }
}
