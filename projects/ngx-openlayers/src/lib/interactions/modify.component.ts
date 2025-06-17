import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import { Condition } from 'ol/events/condition';
import { Modify } from 'ol/interaction';
import { ModifyEvent } from 'ol/interaction/Modify';
import { Vector } from 'ol/source';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-modify',
  template: '',
})
export class ModifyInteractionComponent implements OnInit, OnDestroy {
  @Input()
  condition?: Condition;
  @Input()
  deleteCondition?: Condition;
  @Input()
  pixelTolerance?: number;
  @Input()
  style?: Style | Style[] | StyleFunction;
  @Input()
  features: Collection<Feature>;
  @Input()
  wrapX?: boolean;
  @Input()
  source?: Vector;

  @Output()
  modifyEnd = new EventEmitter<ModifyEvent>();
  @Output()
  modifyStart = new EventEmitter<ModifyEvent>();
  @Output()
  olChange = new EventEmitter<ModifyEvent>();
  @Output()
  olChangeActive = new EventEmitter<ObjectEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();

  instance: Modify;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new Modify(this);
    this.instance.on('change', (event: ModifyEvent) => this.olChange.emit(event));
    this.instance.on('change:active', (event: ObjectEvent) => this.olChangeActive.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.instance.on('modifyend', (event: ModifyEvent) => this.modifyEnd.emit(event));
    this.instance.on('modifystart', (event: ModifyEvent) => this.modifyStart.emit(event));
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
