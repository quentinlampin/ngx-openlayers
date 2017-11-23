import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MapComponent } from '../map.component';
import { MapSystemToken } from '../../map-system';

@Component({
  selector: 'aol-interaction-draganddrop',
  template: ''
})
export class DragAndDropInteractionComponent implements OnInit, OnDestroy {
  instance: ol.interaction.DragAndDrop;

  @Input() formatConstructors: ((n: ol.format.Feature) => any)[];
  @Input() projection: ol.ProjectionLike;
  @Input() target: Element;

  constructor(@Inject(MapSystemToken) protected mapSystem: any, private map: MapComponent) {
  }

  ngOnInit() {
    this.instance = new this.mapSystem.interaction.DragAndDrop(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
