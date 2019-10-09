import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import DragBox, { EndCondition, Options as DragBoxOptions } from 'ol/interaction/DragBox';
import { Condition } from 'ol/events/condition';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragbox',
  template: '',
})
export class DragBoxInteractionComponent implements OnInit, OnDestroy, DragBoxOptions {
  instance: DragBox;

  @Input()
  className: string;
  @Input()
  condition: Condition;
  @Input()
  boxEndCondition: EndCondition;

  onBoxEnd = undefined;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragBox(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
