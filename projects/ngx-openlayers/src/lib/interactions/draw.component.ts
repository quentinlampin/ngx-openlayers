import { Component, OnDestroy, OnInit, inject, input, output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import { Condition } from 'ol/events/condition';
import { Draw } from 'ol/interaction';
import { DrawEvent, GeometryFunction } from 'ol/interaction/Draw';
import { Type } from 'ol/geom/Geometry';
import { Vector } from 'ol/source';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';

import { MapComponent } from '../map.component';
import BaseEvent from 'ol/events/Event';

@Component({
  selector: 'aol-interaction-draw',
  template: '',
  standalone: true,
})
export class DrawInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  clickTolerance = input<number>();
  features = input<Collection<Feature>>();
  source = input<Vector>();
  snapTolerance = input<number>();
  type = input.required<Type>();
  maxPoints = input<number>();
  minPoints = input<number>();
  finishCondition = input<Condition>();
  style = input<Style | Style[] | StyleFunction>();
  geometryFunction = input<GeometryFunction>();
  geometryName = input<string>();
  condition = input<Condition>();
  freehandCondition = input<Condition>();
  freehand = input<boolean>();
  wrapX = input<boolean>();

  olChange = output<BaseEvent>();
  olChangeActive = output<ObjectEvent>();
  drawAbort = output<DrawEvent>();
  drawEnd = output<DrawEvent>();
  drawStart = output<DrawEvent>();
  propertyChange = output<ObjectEvent>();

  instance?: Draw;

  ngOnInit(): void {
    this.instance = new Draw({
      clickTolerance: this.clickTolerance(),
      features: this.features(),
      source: this.source(),
      snapTolerance: this.snapTolerance(),
      type: this.type(),
      maxPoints: this.maxPoints(),
      minPoints: this.minPoints(),
      finishCondition: this.finishCondition(),
      style: this.style(),
      geometryFunction: this.geometryFunction(),
      geometryName: this.geometryName(),
      condition: this.condition(),
      freehandCondition: this.freehandCondition(),
      freehand: this.freehand(),
      wrapX: this.wrapX(),
    });

    this.instance.on('change', (event) => this.olChange.emit(event));
    this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
    this.instance.on('drawabort', (event) => this.drawAbort.emit(event));
    this.instance.on('drawend', (event) => this.drawEnd.emit(event));
    this.instance.on('drawstart', (event) => this.drawStart.emit(event));
    this.instance.on('propertychange', (event) => this.propertyChange.emit(event));

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
