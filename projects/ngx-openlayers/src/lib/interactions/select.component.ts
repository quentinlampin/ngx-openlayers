import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Select } from 'ol/interaction';
import { Layer } from 'ol/layer';
import { Style } from 'ol/style';
import { Collection, Feature } from 'ol';
import { SelectEvent, FilterFunction } from 'ol/interaction/Select';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';

@Component({
  selector: 'aol-interaction-select',
  template: '',
})
export class SelectInteractionComponent implements OnInit, OnDestroy {
  instance: Select;

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
  olChange = new EventEmitter<any>();
  @Output()
  olSelect = new EventEmitter<any>();
  @Output()
  propertyChange = new EventEmitter<any>();

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new Select(this);

    this.instance.on('change', (event: SelectEvent) => this.olChange.emit(event));
    this.instance.on('select', (event: SelectEvent) => this.olSelect.emit(event));
    this.instance.on('propertychange', (event: SelectEvent) => this.propertyChange.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
