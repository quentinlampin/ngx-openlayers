import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import Feature from 'ol/format/Feature';
import { DragAndDrop } from 'ol/interaction';
import { ProjectionLike } from 'ol/proj';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-draganddrop',
  template: '',
})
export class DragAndDropInteractionComponent implements OnInit, OnDestroy {
  @Input()
  formatConstructors: ((n: Feature) => any)[];
  @Input()
  projection: ProjectionLike;
  @Input()
  target: Element;

  instance: DragAndDrop;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragAndDrop(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
