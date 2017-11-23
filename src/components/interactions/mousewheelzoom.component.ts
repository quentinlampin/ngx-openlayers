import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-mousewheelzoom',
  template: ''
})
export class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.MouseWheelZoom;
  @Input() duration: number;
  @Input() timeout: number;
  @Input() useAnchor: boolean;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new this.mapSystem.interaction.MouseWheelZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
