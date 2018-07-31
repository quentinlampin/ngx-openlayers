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
  onModifyEnd = new EventEmitter<ModifyEvent>();
  @Output()
  onModifyStart = new EventEmitter<ModifyEvent>();
  @Output()
  onChange = new EventEmitter<ModifyEvent>();
  @Output()
  onChangeActive = new EventEmitter<ModifyEvent>();
  @Output()
  onPropertyChange = new EventEmitter<ModifyEvent>();

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new Modify(this);
    this.instance.on('change', (event: ModifyEvent) => this.onChange.emit(event));
    this.instance.on('change:active', (event: ModifyEvent) => this.onChangeActive.emit(event));
    this.instance.on('propertychange', (event: ModifyEvent) => this.onPropertyChange.emit(event));
    this.instance.on('modifyend', (event: ModifyEvent) => this.onModifyEnd.emit(event));
    this.instance.on('modifystart', (event: ModifyEvent) => this.onModifyStart.emit(event));
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
