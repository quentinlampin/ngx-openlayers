import { Component, OnDestroy, OnInit } from '@angular/core';
import { interaction } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragrotate',
  template: ''
})
export class DragRotateInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.DragRotate;

  constructor(private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new interaction.DragRotate(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
