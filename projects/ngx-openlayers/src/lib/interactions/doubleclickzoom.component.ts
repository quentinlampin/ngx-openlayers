import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interaction } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-doubleclickzoom',
  template: '',
})
export class DoubleClickZoomInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.DoubleClickZoom;

  @Input()
  duration: number;
  @Input()
  delta: number;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.DoubleClickZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
