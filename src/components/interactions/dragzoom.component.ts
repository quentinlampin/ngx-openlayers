import { Component, OnDestroy, OnInit, Input, Inject } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-dragzoom',
  template: ''
})
export class DragZoomInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.DragZoom;

  @Input() className: string;
  @Input() condition: ol.EventsConditionType;
  @Input() duration: number;
  @Input() out: boolean;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new this.mapSystem.interaction.DragZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
