import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interaction, EventsConditionType, style, StyleFunction, Collection, Feature, source } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-modify',
  template: '',
})
export class ModifyInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.Modify;

  @Input()
  condition?: EventsConditionType;
  @Input()
  deleteCondition?: EventsConditionType;
  @Input()
  pixelTolerance?: number;
  @Input()
  style?: style.Style | style.Style[] | StyleFunction;
  @Input()
  features: Collection<Feature>;
  @Input()
  wrapX?: boolean;
  @Input()
  source?: source.Vector;

  @Output()
  onModifyEnd = new EventEmitter<interaction.Modify.Event>();
  @Output()
  onModifyStart = new EventEmitter<interaction.Modify.Event>();
  @Output()
  onChange = new EventEmitter<interaction.Modify.Event>();
  @Output()
  onChangeActive = new EventEmitter<interaction.Modify.Event>();
  @Output()
  onPropertyChange = new EventEmitter<interaction.Modify.Event>();

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.Modify(this);
    this.instance.on('change', (event: interaction.Modify.Event) => this.onChange.emit(event));
    this.instance.on('change:active', (event: interaction.Modify.Event) => this.onChangeActive.emit(event));
    this.instance.on('propertychange', (event: interaction.Modify.Event) => this.onPropertyChange.emit(event));
    this.instance.on('modifyend', (event: interaction.Modify.Event) => this.onModifyEnd.emit(event));
    this.instance.on('modifystart', (event: interaction.Modify.Event) => this.onModifyStart.emit(event));
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
