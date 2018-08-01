import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { interaction, EventsConditionType } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragrotateandzoom',
  template: '',
})
export class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.DragRotate;

  @Input()
  condition: EventsConditionType;
  @Input()
  duration: number;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.DragRotateAndZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
