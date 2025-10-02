import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import { Condition } from 'ol/events/condition';
import { Draw } from 'ol/interaction';
import { DrawEvent, GeometryFunction } from 'ol/interaction/Draw';
import { Vector } from 'ol/source';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';
import { Type } from 'ol/geom/Geometry';

@Component({
  selector: 'aol-interaction-draw',
  template: '',
  standalone: true,
})
export class DrawInteractionComponent implements OnInit, OnDestroy {
  @Input()
  clickTolerance?: number;
  @Input()
  features?: Collection<Feature>;
  @Input()
  source?: Vector;
  @Input()
  snapTolerance?: number;
  @Input()
  type: Type;
  @Input()
  maxPoints?: number;
  @Input()
  minPoints?: number;
  @Input()
  finishCondition?: Condition;
  @Input()
  style?: Style | Style[] | StyleFunction;
  @Input()
  geometryFunction?: GeometryFunction;
  @Input()
  geometryName?: string;
  @Input()
  condition?: Condition;
  @Input()
  freehandCondition?: Condition;
  @Input()
  freehand?: boolean;
  @Input()
  wrapX?: boolean;

  @Output()
  olChange = new EventEmitter<DrawEvent>();
  @Output()
  olChangeActive = new EventEmitter<ObjectEvent>();
  @Output()
  drawEnd = new EventEmitter<DrawEvent>();
  @Output()
  drawStart = new EventEmitter<DrawEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();

  instance: Draw;

  constructor(private map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new Draw(this);
    this.instance.on('change', (event: DrawEvent) => this.olChange.emit(event));
    this.instance.on('change:active', (event: ObjectEvent) => this.olChangeActive.emit(event));
    this.instance.on('drawend', (event: DrawEvent) => this.drawEnd.emit(event));
    this.instance.on('drawstart', (event: DrawEvent) => this.drawStart.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
