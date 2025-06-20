import { Component, Input, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges, SkipSelf } from '@angular/core';
import { Group } from 'ol/layer';
import { MapComponent } from '../map.component';
import { Extent } from 'ol/extent';
import BaseObject from 'ol/Object';
import BaseLayer from 'ol/layer/Base';
import Collection from 'ol/Collection';

@Component({
  selector: 'aol-layer-group',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class LayerGroupComponent implements OnInit, OnDestroy, OnChanges {
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
  layers: BaseLayer[] | Collection<BaseLayer>;
  @Input()
  properties: {
    [x: string]: unknown;
  };

  public instance: Group;
  componentType = 'layer';
  private host: MapComponent | LayerGroupComponent;

  constructor(
    map: MapComponent,
    @SkipSelf()
    @Optional()
    group?: LayerGroupComponent
  ) {
    this.host = group || map;
  }

  ngOnInit(): void {
    // console.log(`creating ol.layer.Group instance with:`, this);
    this.instance = new Group(this);
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
    }
    this.instance.setProperties(properties, false);
  }
}
