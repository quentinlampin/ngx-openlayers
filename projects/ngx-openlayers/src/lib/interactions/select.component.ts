import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  interaction,
  EventsConditionType,
  layer,
  style,
  Collection,
  SelectFilterFunction,
  StyleFunction,
  Feature,
} from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-select',
  template: '',
})
export class SelectInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.Select;

  @Input()
  addCondition?: EventsConditionType;
  @Input()
  condition?: EventsConditionType;
  @Input()
  layers?: layer.Layer[] | ((layer: layer.Layer) => boolean);
  @Input()
  style?: style.Style | style.Style[] | StyleFunction;
  @Input()
  removeCondition?: EventsConditionType;
  @Input()
  toggleCondition?: EventsConditionType;
  @Input()
  multi?: boolean;
  @Input()
  features?: Collection<Feature>;
  @Input()
  filter?: SelectFilterFunction;
  @Input()
  wrapX?: boolean;

  @Output()
  onChange = new EventEmitter<interaction.Select.Event>();
  @Output()
  onSelect = new EventEmitter<interaction.Select.Event>();
  @Output()
  onPropertyChange = new EventEmitter<interaction.Select.Event>();

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.Select(this);

    this.instance.on('change', (event: interaction.Select.Event) => this.onChange.emit(event));
    this.instance.on('select', (event: interaction.Select.Event) => this.onSelect.emit(event));
    this.instance.on('propertychange', (event: interaction.Select.Event) => this.onPropertyChange.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
