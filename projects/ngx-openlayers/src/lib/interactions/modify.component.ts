import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Style } from 'ol/style';
import { Vector } from 'ol/source';
import { ModifyEvent } from 'ol/interaction/Modify';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';

@Component({
  selector: 'aol-interaction-modify',
  template: '',
})
export class ModifyInteractionComponent implements OnInit, OnDestroy {
  instance: Modify;

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
  olChangeActive = new EventEmitter<ModifyEvent>();
  @Output()
  propertyChange = new EventEmitter<ModifyEvent>();

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new Modify(this);
    this.instance.on('change', (event: ModifyEvent) => this.olChange.emit(event));
    this.instance.on('change:active', (event: ModifyEvent) => this.olChangeActive.emit(event));
    this.instance.on('propertychange', (event: ModifyEvent) => this.propertyChange.emit(event));
    this.instance.on('modifyend', (event: ModifyEvent) => this.modifyEnd.emit(event));
    this.instance.on('modifystart', (event: ModifyEvent) => this.modifyStart.emit(event));
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
