import { Component, OnDestroy, OnInit, inject, input, output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import BaseEvent from 'ol/events/Event';
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
  standalone: true,
})
export class SelectInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  addCondition = input<Condition>();
  condition = input<Condition>();
  layers = input<Layer[] | ((layer: Layer) => boolean)>();
  style = input<Style | Style[] | StyleFunction>();
  removeCondition = input<Condition>();
  toggleCondition = input<Condition>();
  multi = input<boolean>();
  features = input<Collection<Feature>>();
  filter = input<FilterFunction>();

  olChange = output<BaseEvent>();
  olSelect = output<SelectEvent>();
  propertyChange = output<ObjectEvent>();

  instance?: Select;

  ngOnInit(): void {
    this.instance = new Select({
      addCondition: this.addCondition(),
      condition: this.condition(),
      layers: this.layers(),
      style: this.style(),
      removeCondition: this.removeCondition(),
      toggleCondition: this.toggleCondition(),
      multi: this.multi(),
      features: this.features(),
      filter: this.filter(),
    });

    this.instance.on('change', (event) => this.olChange.emit(event));
    this.instance.on('select', (event: SelectEvent) => this.olSelect.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
