import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DragAndDrop } from 'ol/interaction';
import Feature from 'ol/format/Feature';
import { MapComponent } from '../map.component';
import { ProjectionLike } from 'ol/proj';

@Component({
  selector: 'aol-interaction-draganddrop',
  template: '',
})
export class DragAndDropInteractionComponent implements OnInit, OnDestroy {
  instance: DragAndDrop;

  @Input()
  formatConstructors: ((n: Feature) => any)[];
  @Input()
  projection: ProjectionLike;
  @Input()
  target: Element;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragAndDrop(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
