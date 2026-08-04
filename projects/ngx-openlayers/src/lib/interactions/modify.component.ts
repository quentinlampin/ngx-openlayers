import { Component, OnDestroy, OnInit, inject, input, output } from '@angular/core';
import { Collection, Feature } from 'ol';
import { ObjectEvent } from 'ol/Object';
import BaseEvent from 'ol/events/Event';
import { Condition } from 'ol/events/condition';
import { Modify } from 'ol/interaction';
import { ModifyEvent } from 'ol/interaction/Modify';
import { Vector } from 'ol/source';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';

import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-modify',
  template: '',
  standalone: true,
})
export class ModifyInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  condition = input<Condition>();
  deleteCondition = input<Condition>();
  pixelTolerance = input<number>();
  style = input<Style | Style[] | StyleFunction>();
  features = input.required<Collection<Feature>>();
  wrapX = input<boolean>();
  source = input<Vector>();

  modifyEnd = output<ModifyEvent>();
  modifyStart = output<ModifyEvent>();
  olChange = output<BaseEvent>();
  olChangeActive = output<ObjectEvent>();
  propertyChange = output<ObjectEvent>();

  instance?: Modify;

  ngOnInit(): void {
    this.instance = new Modify({
      condition: this.condition(),
      deleteCondition: this.deleteCondition(),
      pixelTolerance: this.pixelTolerance(),
      style: this.style(),
      features: this.features(),
      wrapX: this.wrapX(),
      source: this.source(),
    });

    this.instance.on('change', (event) => this.olChange.emit(event));
    this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
    this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
    this.instance.on('modifyend', (event) => this.modifyEnd.emit(event));
    this.instance.on('modifystart', (event) => this.modifyStart.emit(event));

    this.map.instance?.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    if (this.instance) {
      this.map.instance?.removeInteraction(this.instance);
    }
  }
}
