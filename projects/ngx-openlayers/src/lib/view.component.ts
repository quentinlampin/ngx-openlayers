import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import BaseObject, { ObjectEvent } from 'ol/Object';
import View from 'ol/View';
import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import { MapComponent } from './map.component';
import { ProjectionLike } from 'ol/proj';

@Component({
  selector: 'aol-view',
  template: ` <ng-content></ng-content> `,
  standalone: true,
})
export class ViewComponent implements OnInit, OnChanges {
  private host = inject(MapComponent);

  @Input()
  constrainRotation: boolean | number;
  @Input()
  enableRotation: boolean;
  @Input()
  extent: Extent;
  @Input()
  maxResolution: number;
  @Input()
  minResolution: number;
  @Input()
  maxZoom: number;
  @Input()
  minZoom: number;
  @Input()
  resolution: number;
  @Input()
  resolutions: number[];
  @Input()
  rotation: number;
  @Input()
  zoom: number;
  @Input()
  zoomFactor: number;
  @Input()
  center: Coordinate;
  @Input()
  projection: ProjectionLike;
  @Input()
  constrainOnlyCenter: boolean;
  @Input()
  smoothExtentConstraint: boolean;
  @Input()
  constrainResolution: boolean;
  @Input()
  smoothResolutionConstraint: boolean;
  @Input()
  showFullExtent: boolean;
  @Input()
  multiWorld: boolean;

  @Input()
  zoomAnimation = false;

  @Output()
  changeResolution: EventEmitter<ObjectEvent> = new EventEmitter<ObjectEvent>();
  @Output()
  changeCenter: EventEmitter<ObjectEvent> = new EventEmitter<ObjectEvent>();

  instance: View;
  componentType = 'view';

  ngOnInit(): void {
    // console.log('creating ol.View instance with: ', this);
    this.instance = new View(this);
    this.host.instance.setView(this.instance);

    this.instance.on('change:resolution', (event: ObjectEvent) => this.changeResolution.emit(event));
    this.instance.on('change:center', (event: ObjectEvent) => this.changeCenter.emit(event));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.instance) {
      return;
    }
    const properties: Parameters<BaseObject['setProperties']>[0] = {};
    for (const key in changes) {
      switch (key) {
        case 'zoom':
          /** Work-around: setting the zoom via setProperties does not work. */
          if (this.zoomAnimation) {
            this.instance.animate({ zoom: changes[key].currentValue });
          } else {
            this.instance.setZoom(changes[key].currentValue);
          }
          break;
        case 'projection':
          this.instance = new View(this);
          this.host.instance.setView(this.instance);
          break;
        case 'center':
          /** Work-around: setting the center via setProperties does not work. */
          this.instance.setCenter(changes[key].currentValue);
          break;
        default:
          break;
      }
      properties[key] = changes[key].currentValue;
    }
    // console.log('changes detected in aol-view, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }
}
