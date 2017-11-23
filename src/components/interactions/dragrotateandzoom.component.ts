import { Component, OnDestroy, OnInit, Input, Inject } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-dragrotateandzoom',
  template: ''
})
export class DragRotateAndZoomInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.DragRotate;

  @Input() condition: ol.EventsConditionType;
  @Input() duration: number;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new this.mapSystem.interaction.DragRotateAndZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
