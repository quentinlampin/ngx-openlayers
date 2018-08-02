import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interaction, format, ProjectionLike } from 'openlayers';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-draganddrop',
  template: '',
})
export class DragAndDropInteractionComponent implements OnInit, OnDestroy {
  instance: interaction.DragAndDrop;

  @Input()
  formatConstructors: ((n: format.Feature) => any)[];
  @Input()
  projection: ProjectionLike;
  @Input()
  target: Element;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new interaction.DragAndDrop(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
