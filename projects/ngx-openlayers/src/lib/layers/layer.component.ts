import { Directive, inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Extent } from 'ol/extent';
import RenderEvent from 'ol/render/Event';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
import BaseObject from 'ol/Object';
import Map from 'ol/Map';

@Directive()
export abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  className: string;
  @Input()
  opacity: number;
  @Input()
  visible: boolean;
  @Input()
  extent: Extent;
  @Input()
  zIndex: number;
  @Input()
  minResolution: number;
  @Input()
  maxResolution: number;
  @Input()
  minZoom: number;
  @Input()
  maxZoom: number;
  @Input()
  map: Map;
  @Input()
  properties: {
    [x: string]: unknown;
  };

  @Input()
  prerender: (evt: RenderEvent) => void;
  @Input()
  postrender: (evt: RenderEvent) => void;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  instance: any;
  componentType = 'layer';

  private readonly mapComponent = inject(MapComponent);
  private readonly group = inject(LayerGroupComponent, { optional: true });

  protected host = this.group || this.mapComponent;

  ngOnInit(): void {
    if (this.prerender !== null && this.prerender !== undefined) {
      this.instance.on('prerender', this.prerender);
    }
    if (this.postrender !== null && this.postrender !== undefined) {
      this.instance.on('postrender', this.postrender);
    }
    this.host.instance.getLayers().push(this.instance);
  }

  ngOnDestroy(): void {
    this.host.instance.getLayers().remove(this.instance);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    const properties: Parameters<BaseObject['setProperties']>[0] = {};
    for (const key in changes) {
      properties[key] = changes[key].currentValue;
      if (key === 'prerender') {
        this.instance.un('prerender', changes[key].previousValue);
        this.instance.on('prerender', changes[key].currentValue);
      }
      if (key === 'postrender') {
        this.instance.un('postrender', changes[key].previousValue);
        this.instance.on('postrender', changes[key].currentValue);
      }
    }
    // console.log('changes detected in aol-layer, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}
