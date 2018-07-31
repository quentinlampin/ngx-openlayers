import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { DragBox } from 'ol/interaction';
import { MapComponent } from '../map.component';
import { Condition } from 'ol/events/condition';
import { EndCondition } from 'ol/interaction/DragBox';

@Component({
  selector: 'aol-interaction-dragbox',
  template: '',
})
export class DragBoxInteractionComponent implements OnInit, OnDestroy {
  instance: DragBox;

  @Input()
  className: string;
  @Input()
  condition: Condition;
  @Input()
  boxEndCondition: EndCondition;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new DragBox(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
