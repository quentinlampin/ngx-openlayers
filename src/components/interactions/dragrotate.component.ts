import { Component, OnDestroy, OnInit, Input, Inject } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-dragrotate',
  template: ''
})
export class DragRotateInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.DragRotate;

  @Input() condition: ol.EventsConditionType;
  @Input() duration: number;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new this.mapSystem.interaction.DragRotate(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
