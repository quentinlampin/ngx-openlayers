import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { interaction } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-pinchzoom',
  template: '',
})
export class PinchZoomInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.PinchZoom;

  @Input()
  duration: number;
  @Input()
  constrainResolution: boolean;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.PinchZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
