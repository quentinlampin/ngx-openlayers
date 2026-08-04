import { Component, OnDestroy, OnInit, effect, inject, input } from '@angular/core';
import { Collection } from 'ol';
import { Extent } from 'ol/extent';
import BaseLayer from 'ol/layer/Base';
import { Group } from 'ol/layer';

import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-layer-group',
  template: `<ng-content></ng-content>`,
  standalone: true,
})
export class LayerGroupComponent implements OnInit, OnDestroy {
  opacity = input<number>();
  visible = input<boolean>();
  extent = input<Extent>();
  zIndex = input<number>();
  minResolution = input<number>();
  maxResolution = input<number>();
  minZoom = input<number>();
  maxZoom = input<number>();
  layers = input<BaseLayer[] | Collection<BaseLayer>>();
  properties = input<{ [x: string]: unknown }>();

  public instance?: Group;

  componentType = 'layer';

  private readonly map = inject(MapComponent);

  private readonly group = inject(LayerGroupComponent, {
    skipSelf: true,
    optional: true,
  });

  private readonly host: MapComponent | LayerGroupComponent = this.group ?? this.map;

  constructor() {
    effect(() => {
      const values = {
        opacity: this.opacity(),
        visible: this.visible(),
        extent: this.extent(),
        zIndex: this.zIndex(),
        minResolution: this.minResolution(),
        maxResolution: this.maxResolution(),
        minZoom: this.minZoom(),
        maxZoom: this.maxZoom(),
        layers: this.layers(),
        properties: this.properties(),
      };

      const definedValues = Object.fromEntries(Object.entries(values).filter(([, v]) => v !== undefined));

      if (this.instance && Object.keys(definedValues).length) {
        this.instance.setProperties(values, false);
      }
    });
  }

  ngOnInit(): void {
    this.instance = new Group({
      opacity: this.opacity(),
      visible: this.visible(),
      extent: this.extent(),
      zIndex: this.zIndex(),
      minResolution: this.minResolution(),
      maxResolution: this.maxResolution(),
      minZoom: this.minZoom(),
      maxZoom: this.maxZoom(),
      layers: this.layers(),
      properties: this.properties(),
    });

    this.host.instance?.getLayers().push(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.host.instance?.getLayers().remove(this.instance);
    }
  }
}
