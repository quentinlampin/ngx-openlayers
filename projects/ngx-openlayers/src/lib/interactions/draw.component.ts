import { Component, Input, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { MapComponent } from '../map.component';
import { Draw } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Vector } from 'ol/source';
import GeometryType from 'ol/geom/GeometryType';
import { Style } from 'ol/style';
import { DrawEvent, GeometryFunction } from 'ol/interaction/Draw';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';

@Component({
  selector: 'aol-interaction-draw',
  template: '',
})
export class DrawInteractionComponent implements OnInit, OnDestroy {
  instance: Draw;

  @Input()
  clickTolerance?: number;
  @Input()
  features?: Collection<Feature>;
  @Input()
  source?: Vector;
  @Input()
  snapTolerance?: number;
  @Input()
  type: GeometryType;
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
  olChangeActive = new EventEmitter<DrawEvent>();
  @Output()
  drawEnd = new EventEmitter<DrawEvent>();
  @Output()
  drawStart = new EventEmitter<DrawEvent>();
  @Output()
  propertyChange = new EventEmitter<DrawEvent>();

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new Draw(this);
    this.instance.on('change', (event: DrawEvent) => this.olChange.emit(event));
    this.instance.on('change:active', (event: DrawEvent) => this.olChangeActive.emit(event));
    this.instance.on('drawend', (event: DrawEvent) => this.drawEnd.emit(event));
    this.instance.on('drawstart', (event: DrawEvent) => this.drawStart.emit(event));
    this.instance.on('propertychange', (event: DrawEvent) => this.propertyChange.emit(event));
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
