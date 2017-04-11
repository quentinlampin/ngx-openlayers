import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interaction } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-mousewheelzoom',
  template: ''
})
export class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.MouseWheelZoom;
  @Input() duration: number;
  @Input() timeout: number;
  @Input() useAnchor: boolean;

  constructor(private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new interaction.MouseWheelZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
