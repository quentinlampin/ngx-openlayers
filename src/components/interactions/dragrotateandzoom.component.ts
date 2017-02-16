import { Component, OnDestroy, OnInit } from '@angular/core';
import { interaction } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragrotateandzoom',
  template: ''
})
export class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.DragRotate;

  constructor(private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new interaction.DragRotateAndZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
