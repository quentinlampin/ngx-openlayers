import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragBox } from 'ol/interaction';
import { EndCondition } from 'ol/interaction/DragBox';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragbox',
  template: '',
  standalone: true,
})
export class DragBoxInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  className: string;
  @Input()
  condition: Condition;
  @Input()
  boxEndCondition: EndCondition;

  instance: DragBox;

  ngOnInit(): void {
    this.instance = new DragBox(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
