import { Component, OnDestroy, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-translate',
  template: ''
})
export class TranslateInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.Translate;

  @Input() features?: ol.Collection<ol.Feature>;
  @Input() layers?: (ol.layer.Layer[] | ((layer: ol.layer.Layer) => boolean));
  @Input() hitTolerance?: number;

  @Output() onChange: EventEmitter<ol.interaction.Translate.Event>;
  @Output() onPropertyChange: EventEmitter<ol.interaction.Translate.Event>;
  @Output() onTranslateEnd: EventEmitter<ol.interaction.Translate.Event>;
  @Output() onTranslateStart: EventEmitter<ol.interaction.Translate.Event>;
  @Output() onTranslating: EventEmitter<ol.interaction.Translate.Event>;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
    this.onChange = new EventEmitter<ol.interaction.Translate.Event>();
    this.onPropertyChange = new EventEmitter<ol.interaction.Translate.Event>();
    this.onTranslateEnd = new EventEmitter<ol.interaction.Translate.Event>();
    this.onTranslateStart = new EventEmitter<ol.interaction.Translate.Event>();
    this.onTranslating = new EventEmitter<ol.interaction.Translate.Event>();
  }

  ngOnInit() {
    this.instance = new this.mapSystem.interaction.Translate(this);

    this.instance.on('change', (event: ol.interaction.Translate.Event) => this.onChange.emit(event));
    this.instance.on('propertychange', (event: ol.interaction.Translate.Event) => this.onPropertyChange.emit(event));
    this.instance.on('translateend', (event: ol.interaction.Translate.Event) => this.onTranslateEnd.emit(event));
    this.instance.on('translatestart', (event: ol.interaction.Translate.Event) => this.onTranslateStart.emit(event));
    this.instance.on('translating', (event: ol.interaction.Translate.Event) => this.onTranslating.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
