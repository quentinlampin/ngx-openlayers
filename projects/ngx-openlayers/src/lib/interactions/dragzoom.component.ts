import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragzoom',
  template: '',
})
export class DragZoomInteractionComponent implements OnInit, OnDestroy {
  @Input()
  className: string;
  @Input()
  condition: Condition;
  @Input()
  duration: number;
  @Input()
  out: boolean;

  instance: DragZoom;

  constructor(private map: MapComponent) {}

  ngOnInit(): void {
    this.instance = new DragZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
