import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { interaction, EventsConditionType } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragzoom',
  template: '',
})
export class DragZoomInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.DragZoom;

  @Input()
  className: string;
  @Input()
  condition: EventsConditionType;
  @Input()
  duration: number;
  @Input()
  out: boolean;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.DragZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
