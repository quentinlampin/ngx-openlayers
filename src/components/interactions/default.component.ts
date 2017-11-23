import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-default',
  template: ''
})
export class DefaultInteractionComponent implements OnInit, OnDestroy {
  instance: ol.Collection<ol.interaction.Interaction>;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = this.mapSystem.interaction.defaults();
    this.instance.forEach((interaction) => this.map.instance.addInteraction(interaction));
  }

  ngOnDestroy() {
    this.instance.forEach((interaction) => this.map.instance.removeInteraction(interaction));
  }
}
