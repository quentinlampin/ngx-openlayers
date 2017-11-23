import { Component, OnDestroy, OnInit, Input, Inject } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-dragbox',
  template: ''
})
export class DragBoxInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.DragBox;

  @Input() className: string;
  @Input() condition: ol.EventsConditionType;
  @Input() boxEndCondition: ol.DragBoxEndConditionType;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new this.mapSystem.interaction.DragBox(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
