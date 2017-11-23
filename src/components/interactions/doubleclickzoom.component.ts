import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-doubleclickzoom',
  template: ''
})
export class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.DoubleClickZoom;

  @Input() duration: number;
  @Input() delta: number;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new this.mapSystem.interaction.DoubleClickZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
