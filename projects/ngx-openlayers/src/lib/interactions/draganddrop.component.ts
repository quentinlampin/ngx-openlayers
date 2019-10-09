import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import DragAndDrop, { Options as DragAndDropOptions } from 'ol/interaction/DragAndDrop';
import FeatureFormat from 'ol/format/Feature';
import { MapComponent } from '../map.component';
import { ProjectionLike } from 'ol/proj';

@Component({
  selector: 'aol-interaction-draganddrop',
  template: '',
})
export class DragAndDropInteractionComponent implements OnInit, OnDestroy, DragAndDropOptions {
  instance: DragAndDrop;

  @Input()
  formatConstructors: FeatureFormat[];
  @Input()
  projection: ProjectionLike;
  @Input()
  target: HTMLElement;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragAndDrop(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
