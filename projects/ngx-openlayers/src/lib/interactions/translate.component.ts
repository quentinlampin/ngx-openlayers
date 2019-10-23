import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Translate } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Layer } from 'ol/layer';
import { TranslateEvent } from 'ol/interaction/Translate';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-translate',
  template: '',
})
export class TranslateInteractionComponent implements OnInit, OnDestroy {
  instance: Translate;

  @Input()
  features?: Collection<Feature>;
  @Input()
  layers?: Layer[] | ((layer: Layer) => boolean);
  @Input()
  hitTolerance?: number;

  @Output()
  olChange: EventEmitter<TranslateEvent>;
  @Output()
  propertyChange: EventEmitter<TranslateEvent>;
  @Output()
  translateEnd: EventEmitter<TranslateEvent>;
  @Output()
  translateStart: EventEmitter<TranslateEvent>;
  @Output()
  translating: EventEmitter<TranslateEvent>;

  constructor(private map: MapComponent) {
    this.olChange = new EventEmitter<TranslateEvent>();
    this.propertyChange = new EventEmitter<TranslateEvent>();
    this.translateEnd = new EventEmitter<TranslateEvent>();
    this.translateStart = new EventEmitter<TranslateEvent>();
    this.translating = new EventEmitter<TranslateEvent>();
  }

  ngOnInit() {
    this.instance = new Translate(this);

    this.instance.on('change', (event: TranslateEvent) => this.olChange.emit(event));
    this.instance.on('propertychange', (event: TranslateEvent) => this.propertyChange.emit(event));
    this.instance.on('translateend', (event: TranslateEvent) => this.translateEnd.emit(event));
    this.instance.on('translatestart', (event: TranslateEvent) => this.translateStart.emit(event));
    this.instance.on('translating', (event: TranslateEvent) => this.translating.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
