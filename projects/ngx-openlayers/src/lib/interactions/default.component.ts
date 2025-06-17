import { Component, OnDestroy, OnInit } from '@angular/core';
import { defaults, Interaction } from 'ol/interaction';
import { Collection } from 'ol';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-default',
  template: '',
})
export class DefaultInteractionComponent implements OnInit, OnDestroy {
  instance: Collection<Interaction>;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = defaults();
    this.instance.forEach((i) => this.map.instance.addInteraction(i));
  }

  ngOnDestroy() {
    this.instance.forEach((i) => this.map.instance.removeInteraction(i));
  }
}
