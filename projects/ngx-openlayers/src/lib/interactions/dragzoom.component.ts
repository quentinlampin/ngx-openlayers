import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Condition } from 'ol/events/condition';
import { DragZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';

@Component({
  selector: 'aol-interaction-dragzoom',
  template: '',
  standalone: true,
})
export class DragZoomInteractionComponent implements OnInit, OnDestroy {
  private map = inject(MapComponent);

  @Input()
  className: string;
  @Input()
  condition: Condition;
  @Input()
  duration: number;
  @Input()
  out: boolean;

  instance: DragZoom;

  ngOnInit(): void {
    this.instance = new DragZoom(this);
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy(): void {
    this.map.instance.removeInteraction(this.instance);
  }
}
