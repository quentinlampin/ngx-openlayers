import { Component, OnDestroy, OnInit, inject, input, output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import { Translate } from 'ol/interaction';
import { TranslateEvent } from 'ol/interaction/Translate';
import { Layer } from 'ol/layer';

import { MapComponent } from '../map.component';
import BaseEvent from 'ol/events/Event';

@Component({
  selector: 'aol-interaction-translate',
  template: '',
  standalone: true,
})
export class TranslateInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  features = input<Collection<Feature>>();
  layers = input<Layer[] | ((layer: Layer) => boolean)>();
  hitTolerance = input<number>();

  olChange = output<BaseEvent>();
  propertyChange = output<ObjectEvent>();
  translateEnd = output<TranslateEvent>();
  translateStart = output<TranslateEvent>();
  translating = output<TranslateEvent>();

  instance?: Translate;

  ngOnInit(): void {
    this.instance = new Translate({
      features: this.features(),
      layers: this.layers(),
      hitTolerance: this.hitTolerance(),
    });

    this.instance.on('change', (event) => this.olChange.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.instance.on('translateend', (event: TranslateEvent) => this.translateEnd.emit(event));
    this.instance.on('translatestart', (event: TranslateEvent) => this.translateStart.emit(event));
    this.instance.on('translating', (event: TranslateEvent) => this.translating.emit(event));

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
