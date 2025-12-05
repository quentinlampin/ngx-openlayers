import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import { Translate } from 'ol/interaction';
import { TranslateEvent } from 'ol/interaction/Translate';
import { Layer } from 'ol/layer';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-translate',
  template: '',
  standalone: true,
})
export class TranslateInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  features?: Collection<Feature>;
  @Input()
  layers?: Layer[] | ((layer: Layer) => boolean);
  @Input()
  hitTolerance?: number;

  @Output()
  olChange: EventEmitter<TranslateEvent>;
  @Output()
  propertyChange: EventEmitter<ObjectEvent>;
  @Output()
  translateEnd: EventEmitter<TranslateEvent>;
  @Output()
  translateStart: EventEmitter<TranslateEvent>;
  @Output()
  translating: EventEmitter<TranslateEvent>;

  instance: Translate;

  constructor() {
    this.olChange = new EventEmitter<TranslateEvent>();
    this.propertyChange = new EventEmitter<ObjectEvent>();
    this.translateEnd = new EventEmitter<TranslateEvent>();
    this.translateStart = new EventEmitter<TranslateEvent>();
    this.translating = new EventEmitter<TranslateEvent>();
  }

  ngOnInit(): void {
    this.instance = new Translate(this);

    this.instance.on('change', (event: TranslateEvent) => this.olChange.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.instance.on('translateend', (event: TranslateEvent) => this.translateEnd.emit(event));
    this.instance.on('translatestart', (event: TranslateEvent) => this.translateStart.emit(event));
    this.instance.on('translating', (event: TranslateEvent) => this.translating.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
