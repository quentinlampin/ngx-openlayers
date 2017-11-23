import { Component, OnDestroy, OnInit, Input, Inject } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-pinchzoom',
  template: ''
})
export class PinchZoomInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.PinchZoom;

  @Input() duration: number;
  @Input() constrainResolution: boolean;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new this.mapSystem.interaction.PinchZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
