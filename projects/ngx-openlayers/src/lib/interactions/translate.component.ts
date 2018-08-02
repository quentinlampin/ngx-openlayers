import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interaction, layer, Collection, Feature } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-translate',
  template: '',
})
export class TranslateInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.Translate;

  @Input()
  features?: Collection<Feature>;
  @Input()
  layers?: layer.Layer[] | ((layer: layer.Layer) => boolean);
  @Input()
  hitTolerance?: number;

  @Output()
  onChange: EventEmitter<interaction.Translate.Event>;
  @Output()
  onPropertyChange: EventEmitter<interaction.Translate.Event>;
  @Output()
  onTranslateEnd: EventEmitter<interaction.Translate.Event>;
  @Output()
  onTranslateStart: EventEmitter<interaction.Translate.Event>;
  @Output()
  onTranslating: EventEmitter<interaction.Translate.Event>;

  constructor(private map: MapComponent) {
    this.onChange = new EventEmitter<interaction.Translate.Event>();
    this.onPropertyChange = new EventEmitter<interaction.Translate.Event>();
    this.onTranslateEnd = new EventEmitter<interaction.Translate.Event>();
    this.onTranslateStart = new EventEmitter<interaction.Translate.Event>();
    this.onTranslating = new EventEmitter<interaction.Translate.Event>();
  }

  ngOnInit() {
    this.instance = new interaction.Translate(this);

    this.instance.on('change', (event: interaction.Translate.Event) => this.onChange.emit(event));
    this.instance.on('propertychange', (event: interaction.Translate.Event) => this.onPropertyChange.emit(event));
    this.instance.on('translateend', (event: interaction.Translate.Event) => this.onTranslateEnd.emit(event));
    this.instance.on('translatestart', (event: interaction.Translate.Event) => this.onTranslateStart.emit(event));
    this.instance.on('translating', (event: interaction.Translate.Event) => this.onTranslating.emit(event));

    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
