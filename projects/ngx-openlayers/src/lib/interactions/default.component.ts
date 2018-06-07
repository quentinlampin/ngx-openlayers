import { Component, OnDestroy, OnInit } from '@angular/core';
import { interaction, Collection } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-default',
  template: '',
})
export class DefaultInteractionComponent implements OnInit, OnDestroy {
  instance: Collection<interaction.Interaction>;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = interaction.defaults();
    this.instance.forEach(i => this.map.instance.addInteraction(i));
  }

  ngOnDestroy() {
    this.instance.forEach(i => this.map.instance.removeInteraction(i));
  }
}
