import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragBox } from 'ol/interaction';
import { EndCondition } from 'ol/interaction/DragBox';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragbox',
  template: '',
})
export class DragBoxInteractionComponent implements OnInit, OnDestroy {
  @Input()
  className: string;
  @Input()
  condition: Condition;
  @Input()
  boxEndCondition: EndCondition;

  instance: DragBox;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragBox(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
