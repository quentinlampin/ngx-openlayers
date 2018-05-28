import { Component, OnDestroy, OnInit } from '@angular/core';
import { interaction, Collection } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-default',
  template: ''
})
export class DefaultInteractionComponent implements OnInit, OnDestroy {
  instance: Collection<interaction.Interaction>;

  constructor(private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = interaction.defaults();
    this.instance.forEach((interaction) => this.map.instance.addInteraction(interaction));
  }

  ngOnDestroy() {
    this.instance.forEach((interaction) => this.map.instance.removeInteraction(interaction));
  }
}
