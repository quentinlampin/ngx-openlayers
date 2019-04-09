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
  onChange: EventEmitter<TranslateEvent>;
  @Output()
  onPropertyChange: EventEmitter<TranslateEvent>;
  @Output()
  onTranslateEnd: EventEmitter<TranslateEvent>;
  @Output()
  onTranslateStart: EventEmitter<TranslateEvent>;
  @Output()
  onTranslating: EventEmitter<TranslateEvent>;

  constructor(private map: MapComponent) {
    this.onChange = new EventEmitter<TranslateEvent>();
    this.onPropertyChange = new EventEmitter<TranslateEvent>();
    this.onTranslateEnd = new EventEmitter<TranslateEvent>();
    this.onTranslateStart = new EventEmitter<TranslateEvent>();
    this.onTranslating = new EventEmitter<TranslateEvent>();
  }

  ngOnInit() {
    this.instance = new Translate(this);

    this.instance.on('change', (event: TranslateEvent) => this.onChange.emit(event));
    this.instance.on('propertychange', (event: TranslateEvent) => this.onPropertyChange.emit(event));
    this.instance.on('translateend', (event: TranslateEvent) => this.onTranslateEnd.emit(event));
    this.instance.on('translatestart', (event: TranslateEvent) => this.onTranslateStart.emit(event));
    this.instance.on('translating', (event: TranslateEvent) => this.onTranslating.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
