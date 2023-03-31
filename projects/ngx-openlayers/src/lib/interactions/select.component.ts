import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import { Condition } from 'ol/events/condition';
import { Select } from 'ol/interaction';
import { FilterFunction, SelectEvent } from 'ol/interaction/Select';
import { Layer } from 'ol/layer';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-select',
  template: '',
})
export class SelectInteractionComponent implements OnInit, OnDestroy {
  @Input()
  addCondition?: Condition;
  @Input()
  condition?: Condition;
  @Input()
  layers?: Layer[] | ((layer: Layer) => boolean);
  @Input()
  style?: Style | Style[] | StyleFunction;
  @Input()
  removeCondition?: Condition;
  @Input()
  toggleCondition?: Condition;
  @Input()
  multi?: boolean;
  @Input()
  features?: Collection<Feature>;
  @Input()
  filter?: FilterFunction;
  @Input()
  wrapX?: boolean;

  @Output()
  olChange = new EventEmitter<SelectEvent>();
  @Output()
  olSelect = new EventEmitter<SelectEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();

  instance: Select;

  constructor(private map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new Select(this);

    this.instance.on('change', (event: SelectEvent) => this.olChange.emit(event));
    this.instance.on('select', (event: SelectEvent) => this.olSelect.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
